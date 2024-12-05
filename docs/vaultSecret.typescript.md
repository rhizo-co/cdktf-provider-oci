# `vaultSecret` Submodule <a name="`vaultSecret` Submodule" id="rhizo-co-terraform-provider-oci.vaultSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecret <a name="VaultSecret" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret oci_vault_secret}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer"></a>

```typescript
import { vaultSecret } from 'rhizo-co-terraform-provider-oci'

new vaultSecret.VaultSecret(scope: Construct, id: string, config: VaultSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig">VaultSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig">VaultSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putRotationConfig">putRotationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretContent">putSecretContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretRules">putSecretRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetRotationConfig">resetRotationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetSecretContent">resetSecretContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetSecretRules">resetSecretRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRotationConfig` <a name="putRotationConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putRotationConfig"></a>

```typescript
public putRotationConfig(value: VaultSecretRotationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putRotationConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a>

---

##### `putSecretContent` <a name="putSecretContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretContent"></a>

```typescript
public putSecretContent(value: VaultSecretSecretContent): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretContent.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a>

---

##### `putSecretRules` <a name="putSecretRules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretRules"></a>

```typescript
public putSecretRules(value: IResolvable | VaultSecretSecretRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putTimeouts"></a>

```typescript
public putTimeouts(value: VaultSecretTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetRotationConfig` <a name="resetRotationConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetRotationConfig"></a>

```typescript
public resetRotationConfig(): void
```

##### `resetSecretContent` <a name="resetSecretContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetSecretContent"></a>

```typescript
public resetSecretContent(): void
```

##### `resetSecretRules` <a name="resetSecretRules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetSecretRules"></a>

```typescript
public resetSecretRules(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecret resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isConstruct"></a>

```typescript
import { vaultSecret } from 'rhizo-co-terraform-provider-oci'

vaultSecret.VaultSecret.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformElement"></a>

```typescript
import { vaultSecret } from 'rhizo-co-terraform-provider-oci'

vaultSecret.VaultSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformResource"></a>

```typescript
import { vaultSecret } from 'rhizo-co-terraform-provider-oci'

vaultSecret.VaultSecret.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport"></a>

```typescript
import { vaultSecret } from 'rhizo-co-terraform-provider-oci'

vaultSecret.VaultSecret.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VaultSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.currentVersionNumber">currentVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lastRotationTime">lastRotationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.nextRotationTime">nextRotationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationConfig">rotationConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference">VaultSecretRotationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationStatus">rotationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretContent">secretContent</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference">VaultSecretSecretContentOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretRules">secretRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList">VaultSecretSecretRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeOfCurrentVersionExpiry">timeOfCurrentVersionExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeOfDeletion">timeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference">VaultSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationConfigInput">rotationConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretContentInput">secretContentInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretRulesInput">secretRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `currentVersionNumber`<sup>Required</sup> <a name="currentVersionNumber" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.currentVersionNumber"></a>

```typescript
public readonly currentVersionNumber: string;
```

- *Type:* string

---

##### `lastRotationTime`<sup>Required</sup> <a name="lastRotationTime" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lastRotationTime"></a>

```typescript
public readonly lastRotationTime: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `nextRotationTime`<sup>Required</sup> <a name="nextRotationTime" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.nextRotationTime"></a>

```typescript
public readonly nextRotationTime: string;
```

- *Type:* string

---

##### `rotationConfig`<sup>Required</sup> <a name="rotationConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationConfig"></a>

```typescript
public readonly rotationConfig: VaultSecretRotationConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference">VaultSecretRotationConfigOutputReference</a>

---

##### `rotationStatus`<sup>Required</sup> <a name="rotationStatus" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationStatus"></a>

```typescript
public readonly rotationStatus: string;
```

- *Type:* string

---

##### `secretContent`<sup>Required</sup> <a name="secretContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretContent"></a>

```typescript
public readonly secretContent: VaultSecretSecretContentOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference">VaultSecretSecretContentOutputReference</a>

---

##### `secretRules`<sup>Required</sup> <a name="secretRules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretRules"></a>

```typescript
public readonly secretRules: VaultSecretSecretRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList">VaultSecretSecretRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOfCurrentVersionExpiry`<sup>Required</sup> <a name="timeOfCurrentVersionExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeOfCurrentVersionExpiry"></a>

```typescript
public readonly timeOfCurrentVersionExpiry: string;
```

- *Type:* string

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeOfDeletion"></a>

```typescript
public readonly timeOfDeletion: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeouts"></a>

```typescript
public readonly timeouts: VaultSecretTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference">VaultSecretTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `rotationConfigInput`<sup>Optional</sup> <a name="rotationConfigInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationConfigInput"></a>

```typescript
public readonly rotationConfigInput: VaultSecretRotationConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a>

---

##### `secretContentInput`<sup>Optional</sup> <a name="secretContentInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretContentInput"></a>

```typescript
public readonly secretContentInput: VaultSecretSecretContent;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a>

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `secretRulesInput`<sup>Optional</sup> <a name="secretRulesInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretRulesInput"></a>

```typescript
public readonly secretRulesInput: IResolvable | VaultSecretSecretRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VaultSecretTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a>

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretConfig <a name="VaultSecretConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.Initializer"></a>

```typescript
import { vaultSecret } from 'rhizo-co-terraform-provider-oci'

const vaultSecretConfig: vaultSecret.VaultSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#compartment_id VaultSecret#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#key_id VaultSecret#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretName">secretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_name VaultSecret#secret_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#vault_id VaultSecret#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#defined_tags VaultSecret#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#description VaultSecret#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#freeform_tags VaultSecret#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#id VaultSecret#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#metadata VaultSecret#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.rotationConfig">rotationConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a></code> | rotation_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretContent">secretContent</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a></code> | secret_content block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretRules">secretRules</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>[]</code> | secret_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#compartment_id VaultSecret#compartment_id}.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#key_id VaultSecret#key_id}.

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_name VaultSecret#secret_name}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#vault_id VaultSecret#vault_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#defined_tags VaultSecret#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#description VaultSecret#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#freeform_tags VaultSecret#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#id VaultSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#metadata VaultSecret#metadata}.

---

##### `rotationConfig`<sup>Optional</sup> <a name="rotationConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.rotationConfig"></a>

```typescript
public readonly rotationConfig: VaultSecretRotationConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a>

rotation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rotation_config VaultSecret#rotation_config}

---

##### `secretContent`<sup>Optional</sup> <a name="secretContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretContent"></a>

```typescript
public readonly secretContent: VaultSecretSecretContent;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a>

secret_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_content VaultSecret#secret_content}

---

##### `secretRules`<sup>Optional</sup> <a name="secretRules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretRules"></a>

```typescript
public readonly secretRules: IResolvable | VaultSecretSecretRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>[]

secret_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_rules VaultSecret#secret_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VaultSecretTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#timeouts VaultSecret#timeouts}

---

### VaultSecretRotationConfig <a name="VaultSecretRotationConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.Initializer"></a>

```typescript
import { vaultSecret } from 'rhizo-co-terraform-provider-oci'

const vaultSecretRotationConfig: vaultSecret.VaultSecretRotationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.targetSystemDetails">targetSystemDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a></code> | target_system_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.isScheduledRotationEnabled">isScheduledRotationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_scheduled_rotation_enabled VaultSecret#is_scheduled_rotation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.rotationInterval">rotationInterval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rotation_interval VaultSecret#rotation_interval}. |

---

##### `targetSystemDetails`<sup>Required</sup> <a name="targetSystemDetails" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.targetSystemDetails"></a>

```typescript
public readonly targetSystemDetails: VaultSecretRotationConfigTargetSystemDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a>

target_system_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#target_system_details VaultSecret#target_system_details}

---

##### `isScheduledRotationEnabled`<sup>Optional</sup> <a name="isScheduledRotationEnabled" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.isScheduledRotationEnabled"></a>

```typescript
public readonly isScheduledRotationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_scheduled_rotation_enabled VaultSecret#is_scheduled_rotation_enabled}.

---

##### `rotationInterval`<sup>Optional</sup> <a name="rotationInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.rotationInterval"></a>

```typescript
public readonly rotationInterval: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rotation_interval VaultSecret#rotation_interval}.

---

### VaultSecretRotationConfigTargetSystemDetails <a name="VaultSecretRotationConfigTargetSystemDetails" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.Initializer"></a>

```typescript
import { vaultSecret } from 'rhizo-co-terraform-provider-oci'

const vaultSecretRotationConfigTargetSystemDetails: vaultSecret.VaultSecretRotationConfigTargetSystemDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.targetSystemType">targetSystemType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#target_system_type VaultSecret#target_system_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.adbId">adbId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#adb_id VaultSecret#adb_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.functionId">functionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#function_id VaultSecret#function_id}. |

---

##### `targetSystemType`<sup>Required</sup> <a name="targetSystemType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.targetSystemType"></a>

```typescript
public readonly targetSystemType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#target_system_type VaultSecret#target_system_type}.

---

##### `adbId`<sup>Optional</sup> <a name="adbId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.adbId"></a>

```typescript
public readonly adbId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#adb_id VaultSecret#adb_id}.

---

##### `functionId`<sup>Optional</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#function_id VaultSecret#function_id}.

---

### VaultSecretSecretContent <a name="VaultSecretSecretContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.Initializer"></a>

```typescript
import { vaultSecret } from 'rhizo-co-terraform-provider-oci'

const vaultSecretSecretContent: vaultSecret.VaultSecretSecretContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content_type VaultSecret#content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content VaultSecret#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#name VaultSecret#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.stage">stage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#stage VaultSecret#stage}. |

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content_type VaultSecret#content_type}.

---

##### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content VaultSecret#content}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#name VaultSecret#name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#stage VaultSecret#stage}.

---

### VaultSecretSecretRules <a name="VaultSecretSecretRules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.Initializer"></a>

```typescript
import { vaultSecret } from 'rhizo-co-terraform-provider-oci'

const vaultSecretSecretRules: vaultSecret.VaultSecretSecretRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.ruleType">ruleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rule_type VaultSecret#rule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.isEnforcedOnDeletedSecretVersions">isEnforcedOnDeletedSecretVersions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_enforced_on_deleted_secret_versions VaultSecret#is_enforced_on_deleted_secret_versions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.isSecretContentRetrievalBlockedOnExpiry">isSecretContentRetrievalBlockedOnExpiry</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_secret_content_retrieval_blocked_on_expiry VaultSecret#is_secret_content_retrieval_blocked_on_expiry}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.secretVersionExpiryInterval">secretVersionExpiryInterval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_version_expiry_interval VaultSecret#secret_version_expiry_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.timeOfAbsoluteExpiry">timeOfAbsoluteExpiry</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#time_of_absolute_expiry VaultSecret#time_of_absolute_expiry}. |

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rule_type VaultSecret#rule_type}.

---

##### `isEnforcedOnDeletedSecretVersions`<sup>Optional</sup> <a name="isEnforcedOnDeletedSecretVersions" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.isEnforcedOnDeletedSecretVersions"></a>

```typescript
public readonly isEnforcedOnDeletedSecretVersions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_enforced_on_deleted_secret_versions VaultSecret#is_enforced_on_deleted_secret_versions}.

---

##### `isSecretContentRetrievalBlockedOnExpiry`<sup>Optional</sup> <a name="isSecretContentRetrievalBlockedOnExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.isSecretContentRetrievalBlockedOnExpiry"></a>

```typescript
public readonly isSecretContentRetrievalBlockedOnExpiry: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_secret_content_retrieval_blocked_on_expiry VaultSecret#is_secret_content_retrieval_blocked_on_expiry}.

---

##### `secretVersionExpiryInterval`<sup>Optional</sup> <a name="secretVersionExpiryInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.secretVersionExpiryInterval"></a>

```typescript
public readonly secretVersionExpiryInterval: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_version_expiry_interval VaultSecret#secret_version_expiry_interval}.

---

##### `timeOfAbsoluteExpiry`<sup>Optional</sup> <a name="timeOfAbsoluteExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.timeOfAbsoluteExpiry"></a>

```typescript
public readonly timeOfAbsoluteExpiry: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#time_of_absolute_expiry VaultSecret#time_of_absolute_expiry}.

---

### VaultSecretTimeouts <a name="VaultSecretTimeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.Initializer"></a>

```typescript
import { vaultSecret } from 'rhizo-co-terraform-provider-oci'

const vaultSecretTimeouts: vaultSecret.VaultSecretTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#create VaultSecret#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#delete VaultSecret#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#update VaultSecret#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#create VaultSecret#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#delete VaultSecret#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#update VaultSecret#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretRotationConfigOutputReference <a name="VaultSecretRotationConfigOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer"></a>

```typescript
import { vaultSecret } from 'rhizo-co-terraform-provider-oci'

new vaultSecret.VaultSecretRotationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.putTargetSystemDetails">putTargetSystemDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resetIsScheduledRotationEnabled">resetIsScheduledRotationEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resetRotationInterval">resetRotationInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetSystemDetails` <a name="putTargetSystemDetails" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.putTargetSystemDetails"></a>

```typescript
public putTargetSystemDetails(value: VaultSecretRotationConfigTargetSystemDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.putTargetSystemDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a>

---

##### `resetIsScheduledRotationEnabled` <a name="resetIsScheduledRotationEnabled" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resetIsScheduledRotationEnabled"></a>

```typescript
public resetIsScheduledRotationEnabled(): void
```

##### `resetRotationInterval` <a name="resetRotationInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resetRotationInterval"></a>

```typescript
public resetRotationInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.targetSystemDetails">targetSystemDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference">VaultSecretRotationConfigTargetSystemDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.isScheduledRotationEnabledInput">isScheduledRotationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.rotationIntervalInput">rotationIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.targetSystemDetailsInput">targetSystemDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.isScheduledRotationEnabled">isScheduledRotationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.rotationInterval">rotationInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetSystemDetails`<sup>Required</sup> <a name="targetSystemDetails" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.targetSystemDetails"></a>

```typescript
public readonly targetSystemDetails: VaultSecretRotationConfigTargetSystemDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference">VaultSecretRotationConfigTargetSystemDetailsOutputReference</a>

---

##### `isScheduledRotationEnabledInput`<sup>Optional</sup> <a name="isScheduledRotationEnabledInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.isScheduledRotationEnabledInput"></a>

```typescript
public readonly isScheduledRotationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rotationIntervalInput`<sup>Optional</sup> <a name="rotationIntervalInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.rotationIntervalInput"></a>

```typescript
public readonly rotationIntervalInput: string;
```

- *Type:* string

---

##### `targetSystemDetailsInput`<sup>Optional</sup> <a name="targetSystemDetailsInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.targetSystemDetailsInput"></a>

```typescript
public readonly targetSystemDetailsInput: VaultSecretRotationConfigTargetSystemDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a>

---

##### `isScheduledRotationEnabled`<sup>Required</sup> <a name="isScheduledRotationEnabled" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.isScheduledRotationEnabled"></a>

```typescript
public readonly isScheduledRotationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rotationInterval`<sup>Required</sup> <a name="rotationInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.rotationInterval"></a>

```typescript
public readonly rotationInterval: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VaultSecretRotationConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a>

---


### VaultSecretRotationConfigTargetSystemDetailsOutputReference <a name="VaultSecretRotationConfigTargetSystemDetailsOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer"></a>

```typescript
import { vaultSecret } from 'rhizo-co-terraform-provider-oci'

new vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resetAdbId">resetAdbId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resetFunctionId">resetFunctionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdbId` <a name="resetAdbId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resetAdbId"></a>

```typescript
public resetAdbId(): void
```

##### `resetFunctionId` <a name="resetFunctionId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resetFunctionId"></a>

```typescript
public resetFunctionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.adbIdInput">adbIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.functionIdInput">functionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.targetSystemTypeInput">targetSystemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.adbId">adbId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.functionId">functionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.targetSystemType">targetSystemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adbIdInput`<sup>Optional</sup> <a name="adbIdInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.adbIdInput"></a>

```typescript
public readonly adbIdInput: string;
```

- *Type:* string

---

##### `functionIdInput`<sup>Optional</sup> <a name="functionIdInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.functionIdInput"></a>

```typescript
public readonly functionIdInput: string;
```

- *Type:* string

---

##### `targetSystemTypeInput`<sup>Optional</sup> <a name="targetSystemTypeInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.targetSystemTypeInput"></a>

```typescript
public readonly targetSystemTypeInput: string;
```

- *Type:* string

---

##### `adbId`<sup>Required</sup> <a name="adbId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.adbId"></a>

```typescript
public readonly adbId: string;
```

- *Type:* string

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

---

##### `targetSystemType`<sup>Required</sup> <a name="targetSystemType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.targetSystemType"></a>

```typescript
public readonly targetSystemType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VaultSecretRotationConfigTargetSystemDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a>

---


### VaultSecretSecretContentOutputReference <a name="VaultSecretSecretContentOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer"></a>

```typescript
import { vaultSecret } from 'rhizo-co-terraform-provider-oci'

new vaultSecret.VaultSecretSecretContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetStage">resetStage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetStage` <a name="resetStage" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetStage"></a>

```typescript
public resetStage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.stageInput">stageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.stageInput"></a>

```typescript
public readonly stageInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VaultSecretSecretContent;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a>

---


### VaultSecretSecretRulesList <a name="VaultSecretSecretRulesList" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer"></a>

```typescript
import { vaultSecret } from 'rhizo-co-terraform-provider-oci'

new vaultSecret.VaultSecretSecretRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.get"></a>

```typescript
public get(index: number): VaultSecretSecretRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretSecretRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>[]

---


### VaultSecretSecretRulesOutputReference <a name="VaultSecretSecretRulesOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer"></a>

```typescript
import { vaultSecret } from 'rhizo-co-terraform-provider-oci'

new vaultSecret.VaultSecretSecretRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetIsEnforcedOnDeletedSecretVersions">resetIsEnforcedOnDeletedSecretVersions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetIsSecretContentRetrievalBlockedOnExpiry">resetIsSecretContentRetrievalBlockedOnExpiry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetSecretVersionExpiryInterval">resetSecretVersionExpiryInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetTimeOfAbsoluteExpiry">resetTimeOfAbsoluteExpiry</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnforcedOnDeletedSecretVersions` <a name="resetIsEnforcedOnDeletedSecretVersions" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetIsEnforcedOnDeletedSecretVersions"></a>

```typescript
public resetIsEnforcedOnDeletedSecretVersions(): void
```

##### `resetIsSecretContentRetrievalBlockedOnExpiry` <a name="resetIsSecretContentRetrievalBlockedOnExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetIsSecretContentRetrievalBlockedOnExpiry"></a>

```typescript
public resetIsSecretContentRetrievalBlockedOnExpiry(): void
```

##### `resetSecretVersionExpiryInterval` <a name="resetSecretVersionExpiryInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetSecretVersionExpiryInterval"></a>

```typescript
public resetSecretVersionExpiryInterval(): void
```

##### `resetTimeOfAbsoluteExpiry` <a name="resetTimeOfAbsoluteExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetTimeOfAbsoluteExpiry"></a>

```typescript
public resetTimeOfAbsoluteExpiry(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isEnforcedOnDeletedSecretVersionsInput">isEnforcedOnDeletedSecretVersionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isSecretContentRetrievalBlockedOnExpiryInput">isSecretContentRetrievalBlockedOnExpiryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.ruleTypeInput">ruleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.secretVersionExpiryIntervalInput">secretVersionExpiryIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.timeOfAbsoluteExpiryInput">timeOfAbsoluteExpiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isEnforcedOnDeletedSecretVersions">isEnforcedOnDeletedSecretVersions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isSecretContentRetrievalBlockedOnExpiry">isSecretContentRetrievalBlockedOnExpiry</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.ruleType">ruleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.secretVersionExpiryInterval">secretVersionExpiryInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.timeOfAbsoluteExpiry">timeOfAbsoluteExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnforcedOnDeletedSecretVersionsInput`<sup>Optional</sup> <a name="isEnforcedOnDeletedSecretVersionsInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isEnforcedOnDeletedSecretVersionsInput"></a>

```typescript
public readonly isEnforcedOnDeletedSecretVersionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSecretContentRetrievalBlockedOnExpiryInput`<sup>Optional</sup> <a name="isSecretContentRetrievalBlockedOnExpiryInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isSecretContentRetrievalBlockedOnExpiryInput"></a>

```typescript
public readonly isSecretContentRetrievalBlockedOnExpiryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ruleTypeInput`<sup>Optional</sup> <a name="ruleTypeInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.ruleTypeInput"></a>

```typescript
public readonly ruleTypeInput: string;
```

- *Type:* string

---

##### `secretVersionExpiryIntervalInput`<sup>Optional</sup> <a name="secretVersionExpiryIntervalInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.secretVersionExpiryIntervalInput"></a>

```typescript
public readonly secretVersionExpiryIntervalInput: string;
```

- *Type:* string

---

##### `timeOfAbsoluteExpiryInput`<sup>Optional</sup> <a name="timeOfAbsoluteExpiryInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.timeOfAbsoluteExpiryInput"></a>

```typescript
public readonly timeOfAbsoluteExpiryInput: string;
```

- *Type:* string

---

##### `isEnforcedOnDeletedSecretVersions`<sup>Required</sup> <a name="isEnforcedOnDeletedSecretVersions" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isEnforcedOnDeletedSecretVersions"></a>

```typescript
public readonly isEnforcedOnDeletedSecretVersions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSecretContentRetrievalBlockedOnExpiry`<sup>Required</sup> <a name="isSecretContentRetrievalBlockedOnExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isSecretContentRetrievalBlockedOnExpiry"></a>

```typescript
public readonly isSecretContentRetrievalBlockedOnExpiry: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

---

##### `secretVersionExpiryInterval`<sup>Required</sup> <a name="secretVersionExpiryInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.secretVersionExpiryInterval"></a>

```typescript
public readonly secretVersionExpiryInterval: string;
```

- *Type:* string

---

##### `timeOfAbsoluteExpiry`<sup>Required</sup> <a name="timeOfAbsoluteExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.timeOfAbsoluteExpiry"></a>

```typescript
public readonly timeOfAbsoluteExpiry: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretSecretRules;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>

---


### VaultSecretTimeoutsOutputReference <a name="VaultSecretTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer"></a>

```typescript
import { vaultSecret } from 'rhizo-co-terraform-provider-oci'

new vaultSecret.VaultSecretTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a>

---



