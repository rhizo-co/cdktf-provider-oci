# `mediaServicesStreamPackagingConfig` Submodule <a name="`mediaServicesStreamPackagingConfig` Submodule" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesStreamPackagingConfig <a name="MediaServicesStreamPackagingConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config oci_media_services_stream_packaging_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer"></a>

```typescript
import { mediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

new mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig(scope: Construct, id: string, config: MediaServicesStreamPackagingConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig">MediaServicesStreamPackagingConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig">MediaServicesStreamPackagingConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetIsLockOverride">resetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryption` <a name="putEncryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putEncryption"></a>

```typescript
public putEncryption(value: MediaServicesStreamPackagingConfigEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putEncryption.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption">MediaServicesStreamPackagingConfigEncryption</a>

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putLocks"></a>

```typescript
public putLocks(value: IResolvable | MediaServicesStreamPackagingConfigLocks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putLocks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: MediaServicesStreamPackagingConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts">MediaServicesStreamPackagingConfigTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetEncryption` <a name="resetEncryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetEncryption"></a>

```typescript
public resetEncryption(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsLockOverride` <a name="resetIsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetIsLockOverride"></a>

```typescript
public resetIsLockOverride(): void
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetLocks"></a>

```typescript
public resetLocks(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MediaServicesStreamPackagingConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isConstruct"></a>

```typescript
import { mediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isTerraformElement"></a>

```typescript
import { mediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isTerraformResource"></a>

```typescript
import { mediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.generateConfigForImport"></a>

```typescript
import { mediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MediaServicesStreamPackagingConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaServicesStreamPackagingConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaServicesStreamPackagingConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesStreamPackagingConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.encryption">encryption</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference">MediaServicesStreamPackagingConfigEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList">MediaServicesStreamPackagingConfigLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference">MediaServicesStreamPackagingConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.distributionChannelIdInput">distributionChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.encryptionInput">encryptionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption">MediaServicesStreamPackagingConfigEncryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.isLockOverrideInput">isLockOverrideInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.locksInput">locksInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.segmentTimeInSecondsInput">segmentTimeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.streamPackagingFormatInput">streamPackagingFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts">MediaServicesStreamPackagingConfigTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.distributionChannelId">distributionChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.isLockOverride">isLockOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.segmentTimeInSeconds">segmentTimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.streamPackagingFormat">streamPackagingFormat</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.encryption"></a>

```typescript
public readonly encryption: MediaServicesStreamPackagingConfigEncryptionOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference">MediaServicesStreamPackagingConfigEncryptionOutputReference</a>

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.locks"></a>

```typescript
public readonly locks: MediaServicesStreamPackagingConfigLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList">MediaServicesStreamPackagingConfigLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MediaServicesStreamPackagingConfigTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference">MediaServicesStreamPackagingConfigTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `distributionChannelIdInput`<sup>Optional</sup> <a name="distributionChannelIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.distributionChannelIdInput"></a>

```typescript
public readonly distributionChannelIdInput: string;
```

- *Type:* string

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.encryptionInput"></a>

```typescript
public readonly encryptionInput: MediaServicesStreamPackagingConfigEncryption;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption">MediaServicesStreamPackagingConfigEncryption</a>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isLockOverrideInput`<sup>Optional</sup> <a name="isLockOverrideInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.isLockOverrideInput"></a>

```typescript
public readonly isLockOverrideInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.locksInput"></a>

```typescript
public readonly locksInput: IResolvable | MediaServicesStreamPackagingConfigLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>[]

---

##### `segmentTimeInSecondsInput`<sup>Optional</sup> <a name="segmentTimeInSecondsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.segmentTimeInSecondsInput"></a>

```typescript
public readonly segmentTimeInSecondsInput: number;
```

- *Type:* number

---

##### `streamPackagingFormatInput`<sup>Optional</sup> <a name="streamPackagingFormatInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.streamPackagingFormatInput"></a>

```typescript
public readonly streamPackagingFormatInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MediaServicesStreamPackagingConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts">MediaServicesStreamPackagingConfigTimeouts</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `distributionChannelId`<sup>Required</sup> <a name="distributionChannelId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.distributionChannelId"></a>

```typescript
public readonly distributionChannelId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `segmentTimeInSeconds`<sup>Required</sup> <a name="segmentTimeInSeconds" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.segmentTimeInSeconds"></a>

```typescript
public readonly segmentTimeInSeconds: number;
```

- *Type:* number

---

##### `streamPackagingFormat`<sup>Required</sup> <a name="streamPackagingFormat" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.streamPackagingFormat"></a>

```typescript
public readonly streamPackagingFormat: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesStreamPackagingConfigConfig <a name="MediaServicesStreamPackagingConfigConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.Initializer"></a>

```typescript
import { mediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

const mediaServicesStreamPackagingConfigConfig: mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#display_name MediaServicesStreamPackagingConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.distributionChannelId">distributionChannelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#distribution_channel_id MediaServicesStreamPackagingConfig#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.segmentTimeInSeconds">segmentTimeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#segment_time_in_seconds MediaServicesStreamPackagingConfig#segment_time_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.streamPackagingFormat">streamPackagingFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#stream_packaging_format MediaServicesStreamPackagingConfig#stream_packaging_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#defined_tags MediaServicesStreamPackagingConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.encryption">encryption</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption">MediaServicesStreamPackagingConfigEncryption</a></code> | encryption block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#freeform_tags MediaServicesStreamPackagingConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#id MediaServicesStreamPackagingConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.isLockOverride">isLockOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#is_lock_override MediaServicesStreamPackagingConfig#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.locks">locks</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>[]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts">MediaServicesStreamPackagingConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#display_name MediaServicesStreamPackagingConfig#display_name}.

---

##### `distributionChannelId`<sup>Required</sup> <a name="distributionChannelId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.distributionChannelId"></a>

```typescript
public readonly distributionChannelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#distribution_channel_id MediaServicesStreamPackagingConfig#distribution_channel_id}.

---

##### `segmentTimeInSeconds`<sup>Required</sup> <a name="segmentTimeInSeconds" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.segmentTimeInSeconds"></a>

```typescript
public readonly segmentTimeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#segment_time_in_seconds MediaServicesStreamPackagingConfig#segment_time_in_seconds}.

---

##### `streamPackagingFormat`<sup>Required</sup> <a name="streamPackagingFormat" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.streamPackagingFormat"></a>

```typescript
public readonly streamPackagingFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#stream_packaging_format MediaServicesStreamPackagingConfig#stream_packaging_format}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#defined_tags MediaServicesStreamPackagingConfig#defined_tags}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.encryption"></a>

```typescript
public readonly encryption: MediaServicesStreamPackagingConfigEncryption;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption">MediaServicesStreamPackagingConfigEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#encryption MediaServicesStreamPackagingConfig#encryption}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#freeform_tags MediaServicesStreamPackagingConfig#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#id MediaServicesStreamPackagingConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#is_lock_override MediaServicesStreamPackagingConfig#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.locks"></a>

```typescript
public readonly locks: IResolvable | MediaServicesStreamPackagingConfigLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>[]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#locks MediaServicesStreamPackagingConfig#locks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MediaServicesStreamPackagingConfigTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts">MediaServicesStreamPackagingConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#timeouts MediaServicesStreamPackagingConfig#timeouts}

---

### MediaServicesStreamPackagingConfigEncryption <a name="MediaServicesStreamPackagingConfigEncryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption.Initializer"></a>

```typescript
import { mediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

const mediaServicesStreamPackagingConfigEncryption: mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption.property.algorithm">algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#algorithm MediaServicesStreamPackagingConfig#algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#kms_key_id MediaServicesStreamPackagingConfig#kms_key_id}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#algorithm MediaServicesStreamPackagingConfig#algorithm}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#kms_key_id MediaServicesStreamPackagingConfig#kms_key_id}.

---

### MediaServicesStreamPackagingConfigLocks <a name="MediaServicesStreamPackagingConfigLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.Initializer"></a>

```typescript
import { mediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

const mediaServicesStreamPackagingConfigLocks: mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#compartment_id MediaServicesStreamPackagingConfig#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#type MediaServicesStreamPackagingConfig#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.message">message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#message MediaServicesStreamPackagingConfig#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#related_resource_id MediaServicesStreamPackagingConfig#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.timeCreated">timeCreated</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#time_created MediaServicesStreamPackagingConfig#time_created}. |

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#compartment_id MediaServicesStreamPackagingConfig#compartment_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#type MediaServicesStreamPackagingConfig#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#message MediaServicesStreamPackagingConfig#message}.

---

##### `relatedResourceId`<sup>Optional</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#related_resource_id MediaServicesStreamPackagingConfig#related_resource_id}.

---

##### `timeCreated`<sup>Optional</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#time_created MediaServicesStreamPackagingConfig#time_created}.

---

### MediaServicesStreamPackagingConfigTimeouts <a name="MediaServicesStreamPackagingConfigTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts.Initializer"></a>

```typescript
import { mediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

const mediaServicesStreamPackagingConfigTimeouts: mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#create MediaServicesStreamPackagingConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#delete MediaServicesStreamPackagingConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#update MediaServicesStreamPackagingConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#create MediaServicesStreamPackagingConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#delete MediaServicesStreamPackagingConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#update MediaServicesStreamPackagingConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesStreamPackagingConfigEncryptionOutputReference <a name="MediaServicesStreamPackagingConfigEncryptionOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer"></a>

```typescript
import { mediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

new mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption">MediaServicesStreamPackagingConfigEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaServicesStreamPackagingConfigEncryption;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption">MediaServicesStreamPackagingConfigEncryption</a>

---


### MediaServicesStreamPackagingConfigLocksList <a name="MediaServicesStreamPackagingConfigLocksList" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.Initializer"></a>

```typescript
import { mediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

new mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.get"></a>

```typescript
public get(index: number): MediaServicesStreamPackagingConfigLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaServicesStreamPackagingConfigLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>[]

---


### MediaServicesStreamPackagingConfigLocksOutputReference <a name="MediaServicesStreamPackagingConfigLocksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer"></a>

```typescript
import { mediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

new mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resetRelatedResourceId">resetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resetTimeCreated">resetTimeCreated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetRelatedResourceId` <a name="resetRelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resetRelatedResourceId"></a>

```typescript
public resetRelatedResourceId(): void
```

##### `resetTimeCreated` <a name="resetTimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resetTimeCreated"></a>

```typescript
public resetTimeCreated(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.relatedResourceIdInput">relatedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.timeCreatedInput">timeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `relatedResourceIdInput`<sup>Optional</sup> <a name="relatedResourceIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.relatedResourceIdInput"></a>

```typescript
public readonly relatedResourceIdInput: string;
```

- *Type:* string

---

##### `timeCreatedInput`<sup>Optional</sup> <a name="timeCreatedInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.timeCreatedInput"></a>

```typescript
public readonly timeCreatedInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaServicesStreamPackagingConfigLocks;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>

---


### MediaServicesStreamPackagingConfigTimeoutsOutputReference <a name="MediaServicesStreamPackagingConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { mediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

new mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts">MediaServicesStreamPackagingConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaServicesStreamPackagingConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts">MediaServicesStreamPackagingConfigTimeouts</a>

---



