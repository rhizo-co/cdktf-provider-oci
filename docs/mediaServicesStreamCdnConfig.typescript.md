# `mediaServicesStreamCdnConfig` Submodule <a name="`mediaServicesStreamCdnConfig` Submodule" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesStreamCdnConfig <a name="MediaServicesStreamCdnConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config oci_media_services_stream_cdn_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer"></a>

```typescript
import { mediaServicesStreamCdnConfig } from 'rhizo-co-terraform-provider-oci'

new mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig(scope: Construct, id: string, config: MediaServicesStreamCdnConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig">MediaServicesStreamCdnConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig">MediaServicesStreamCdnConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsLockOverride">resetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig"></a>

```typescript
public putConfig(value: MediaServicesStreamCdnConfigConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putLocks"></a>

```typescript
public putLocks(value: IResolvable | MediaServicesStreamCdnConfigLocks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putLocks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: MediaServicesStreamCdnConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetIsLockOverride` <a name="resetIsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsLockOverride"></a>

```typescript
public resetIsLockOverride(): void
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetLocks"></a>

```typescript
public resetLocks(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MediaServicesStreamCdnConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isConstruct"></a>

```typescript
import { mediaServicesStreamCdnConfig } from 'rhizo-co-terraform-provider-oci'

mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformElement"></a>

```typescript
import { mediaServicesStreamCdnConfig } from 'rhizo-co-terraform-provider-oci'

mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformResource"></a>

```typescript
import { mediaServicesStreamCdnConfig } from 'rhizo-co-terraform-provider-oci'

mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport"></a>

```typescript
import { mediaServicesStreamCdnConfig } from 'rhizo-co-terraform-provider-oci'

mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MediaServicesStreamCdnConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaServicesStreamCdnConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaServicesStreamCdnConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesStreamCdnConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference">MediaServicesStreamCdnConfigConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecyleDetails">lifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList">MediaServicesStreamCdnConfigLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference">MediaServicesStreamCdnConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.configInput">configInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelIdInput">distributionChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverrideInput">isLockOverrideInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locksInput">locksInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelId">distributionChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverride">isLockOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.config"></a>

```typescript
public readonly config: MediaServicesStreamCdnConfigConfigAOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference">MediaServicesStreamCdnConfigConfigAOutputReference</a>

---

##### `lifecyleDetails`<sup>Required</sup> <a name="lifecyleDetails" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecyleDetails"></a>

```typescript
public readonly lifecyleDetails: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locks"></a>

```typescript
public readonly locks: MediaServicesStreamCdnConfigLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList">MediaServicesStreamCdnConfigLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MediaServicesStreamCdnConfigTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference">MediaServicesStreamCdnConfigTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.configInput"></a>

```typescript
public readonly configInput: MediaServicesStreamCdnConfigConfigA;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `distributionChannelIdInput`<sup>Optional</sup> <a name="distributionChannelIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelIdInput"></a>

```typescript
public readonly distributionChannelIdInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isLockOverrideInput`<sup>Optional</sup> <a name="isLockOverrideInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverrideInput"></a>

```typescript
public readonly isLockOverrideInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locksInput"></a>

```typescript
public readonly locksInput: IResolvable | MediaServicesStreamCdnConfigLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MediaServicesStreamCdnConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `distributionChannelId`<sup>Required</sup> <a name="distributionChannelId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelId"></a>

```typescript
public readonly distributionChannelId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesStreamCdnConfigConfig <a name="MediaServicesStreamCdnConfigConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.Initializer"></a>

```typescript
import { mediaServicesStreamCdnConfig } from 'rhizo-co-terraform-provider-oci'

const mediaServicesStreamCdnConfigConfig: mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a></code> | config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#display_name MediaServicesStreamCdnConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.distributionChannelId">distributionChannelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#distribution_channel_id MediaServicesStreamCdnConfig#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#defined_tags MediaServicesStreamCdnConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#freeform_tags MediaServicesStreamCdnConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#id MediaServicesStreamCdnConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_enabled MediaServicesStreamCdnConfig#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isLockOverride">isLockOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_lock_override MediaServicesStreamCdnConfig#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.locks">locks</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>[]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.config"></a>

```typescript
public readonly config: MediaServicesStreamCdnConfigConfigA;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#config MediaServicesStreamCdnConfig#config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#display_name MediaServicesStreamCdnConfig#display_name}.

---

##### `distributionChannelId`<sup>Required</sup> <a name="distributionChannelId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.distributionChannelId"></a>

```typescript
public readonly distributionChannelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#distribution_channel_id MediaServicesStreamCdnConfig#distribution_channel_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#defined_tags MediaServicesStreamCdnConfig#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#freeform_tags MediaServicesStreamCdnConfig#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#id MediaServicesStreamCdnConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_enabled MediaServicesStreamCdnConfig#is_enabled}.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_lock_override MediaServicesStreamCdnConfig#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.locks"></a>

```typescript
public readonly locks: IResolvable | MediaServicesStreamCdnConfigLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>[]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#locks MediaServicesStreamCdnConfig#locks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MediaServicesStreamCdnConfigTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#timeouts MediaServicesStreamCdnConfig#timeouts}

---

### MediaServicesStreamCdnConfigConfigA <a name="MediaServicesStreamCdnConfigConfigA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.Initializer"></a>

```typescript
import { mediaServicesStreamCdnConfig } from 'rhizo-co-terraform-provider-oci'

const mediaServicesStreamCdnConfigConfigA: mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeHostname">edgeHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_hostname MediaServicesStreamCdnConfig#edge_hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgePathPrefix">edgePathPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_path_prefix MediaServicesStreamCdnConfig#edge_path_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenKey">edgeTokenKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_key MediaServicesStreamCdnConfig#edge_token_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenSalt">edgeTokenSalt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_salt MediaServicesStreamCdnConfig#edge_token_salt}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.isEdgeTokenAuth">isEdgeTokenAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_edge_token_auth MediaServicesStreamCdnConfig#is_edge_token_auth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyA">originAuthSecretKeyA</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_a MediaServicesStreamCdnConfig#origin_auth_secret_key_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyB">originAuthSecretKeyB</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_b MediaServicesStreamCdnConfig#origin_auth_secret_key_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceA">originAuthSecretKeyNonceA</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_a MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceB">originAuthSecretKeyNonceB</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_b MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignEncryption">originAuthSignEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_encryption MediaServicesStreamCdnConfig#origin_auth_sign_encryption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignType">originAuthSignType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_type MediaServicesStreamCdnConfig#origin_auth_sign_type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}.

---

##### `edgeHostname`<sup>Optional</sup> <a name="edgeHostname" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeHostname"></a>

```typescript
public readonly edgeHostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_hostname MediaServicesStreamCdnConfig#edge_hostname}.

---

##### `edgePathPrefix`<sup>Optional</sup> <a name="edgePathPrefix" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgePathPrefix"></a>

```typescript
public readonly edgePathPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_path_prefix MediaServicesStreamCdnConfig#edge_path_prefix}.

---

##### `edgeTokenKey`<sup>Optional</sup> <a name="edgeTokenKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenKey"></a>

```typescript
public readonly edgeTokenKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_key MediaServicesStreamCdnConfig#edge_token_key}.

---

##### `edgeTokenSalt`<sup>Optional</sup> <a name="edgeTokenSalt" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenSalt"></a>

```typescript
public readonly edgeTokenSalt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_salt MediaServicesStreamCdnConfig#edge_token_salt}.

---

##### `isEdgeTokenAuth`<sup>Optional</sup> <a name="isEdgeTokenAuth" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.isEdgeTokenAuth"></a>

```typescript
public readonly isEdgeTokenAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_edge_token_auth MediaServicesStreamCdnConfig#is_edge_token_auth}.

---

##### `originAuthSecretKeyA`<sup>Optional</sup> <a name="originAuthSecretKeyA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyA"></a>

```typescript
public readonly originAuthSecretKeyA: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_a MediaServicesStreamCdnConfig#origin_auth_secret_key_a}.

---

##### `originAuthSecretKeyB`<sup>Optional</sup> <a name="originAuthSecretKeyB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyB"></a>

```typescript
public readonly originAuthSecretKeyB: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_b MediaServicesStreamCdnConfig#origin_auth_secret_key_b}.

---

##### `originAuthSecretKeyNonceA`<sup>Optional</sup> <a name="originAuthSecretKeyNonceA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceA"></a>

```typescript
public readonly originAuthSecretKeyNonceA: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_a MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_a}.

---

##### `originAuthSecretKeyNonceB`<sup>Optional</sup> <a name="originAuthSecretKeyNonceB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceB"></a>

```typescript
public readonly originAuthSecretKeyNonceB: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_b MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_b}.

---

##### `originAuthSignEncryption`<sup>Optional</sup> <a name="originAuthSignEncryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignEncryption"></a>

```typescript
public readonly originAuthSignEncryption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_encryption MediaServicesStreamCdnConfig#origin_auth_sign_encryption}.

---

##### `originAuthSignType`<sup>Optional</sup> <a name="originAuthSignType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignType"></a>

```typescript
public readonly originAuthSignType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_type MediaServicesStreamCdnConfig#origin_auth_sign_type}.

---

### MediaServicesStreamCdnConfigLocks <a name="MediaServicesStreamCdnConfigLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.Initializer"></a>

```typescript
import { mediaServicesStreamCdnConfig } from 'rhizo-co-terraform-provider-oci'

const mediaServicesStreamCdnConfigLocks: mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#compartment_id MediaServicesStreamCdnConfig#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.message">message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#message MediaServicesStreamCdnConfig#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#related_resource_id MediaServicesStreamCdnConfig#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.timeCreated">timeCreated</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#time_created MediaServicesStreamCdnConfig#time_created}. |

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#compartment_id MediaServicesStreamCdnConfig#compartment_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#message MediaServicesStreamCdnConfig#message}.

---

##### `relatedResourceId`<sup>Optional</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#related_resource_id MediaServicesStreamCdnConfig#related_resource_id}.

---

##### `timeCreated`<sup>Optional</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#time_created MediaServicesStreamCdnConfig#time_created}.

---

### MediaServicesStreamCdnConfigTimeouts <a name="MediaServicesStreamCdnConfigTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.Initializer"></a>

```typescript
import { mediaServicesStreamCdnConfig } from 'rhizo-co-terraform-provider-oci'

const mediaServicesStreamCdnConfigTimeouts: mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#create MediaServicesStreamCdnConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#delete MediaServicesStreamCdnConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#update MediaServicesStreamCdnConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#create MediaServicesStreamCdnConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#delete MediaServicesStreamCdnConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#update MediaServicesStreamCdnConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesStreamCdnConfigConfigAOutputReference <a name="MediaServicesStreamCdnConfigConfigAOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer"></a>

```typescript
import { mediaServicesStreamCdnConfig } from 'rhizo-co-terraform-provider-oci'

new mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeHostname">resetEdgeHostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgePathPrefix">resetEdgePathPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenKey">resetEdgeTokenKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenSalt">resetEdgeTokenSalt</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetIsEdgeTokenAuth">resetIsEdgeTokenAuth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyA">resetOriginAuthSecretKeyA</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyB">resetOriginAuthSecretKeyB</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceA">resetOriginAuthSecretKeyNonceA</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceB">resetOriginAuthSecretKeyNonceB</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignEncryption">resetOriginAuthSignEncryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignType">resetOriginAuthSignType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEdgeHostname` <a name="resetEdgeHostname" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeHostname"></a>

```typescript
public resetEdgeHostname(): void
```

##### `resetEdgePathPrefix` <a name="resetEdgePathPrefix" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgePathPrefix"></a>

```typescript
public resetEdgePathPrefix(): void
```

##### `resetEdgeTokenKey` <a name="resetEdgeTokenKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenKey"></a>

```typescript
public resetEdgeTokenKey(): void
```

##### `resetEdgeTokenSalt` <a name="resetEdgeTokenSalt" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenSalt"></a>

```typescript
public resetEdgeTokenSalt(): void
```

##### `resetIsEdgeTokenAuth` <a name="resetIsEdgeTokenAuth" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetIsEdgeTokenAuth"></a>

```typescript
public resetIsEdgeTokenAuth(): void
```

##### `resetOriginAuthSecretKeyA` <a name="resetOriginAuthSecretKeyA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyA"></a>

```typescript
public resetOriginAuthSecretKeyA(): void
```

##### `resetOriginAuthSecretKeyB` <a name="resetOriginAuthSecretKeyB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyB"></a>

```typescript
public resetOriginAuthSecretKeyB(): void
```

##### `resetOriginAuthSecretKeyNonceA` <a name="resetOriginAuthSecretKeyNonceA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceA"></a>

```typescript
public resetOriginAuthSecretKeyNonceA(): void
```

##### `resetOriginAuthSecretKeyNonceB` <a name="resetOriginAuthSecretKeyNonceB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceB"></a>

```typescript
public resetOriginAuthSecretKeyNonceB(): void
```

##### `resetOriginAuthSignEncryption` <a name="resetOriginAuthSignEncryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignEncryption"></a>

```typescript
public resetOriginAuthSignEncryption(): void
```

##### `resetOriginAuthSignType` <a name="resetOriginAuthSignType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignType"></a>

```typescript
public resetOriginAuthSignType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostnameInput">edgeHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefixInput">edgePathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKeyInput">edgeTokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSaltInput">edgeTokenSaltInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuthInput">isEdgeTokenAuthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyAInput">originAuthSecretKeyAInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyBInput">originAuthSecretKeyBInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceAInput">originAuthSecretKeyNonceAInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceBInput">originAuthSecretKeyNonceBInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryptionInput">originAuthSignEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignTypeInput">originAuthSignTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostname">edgeHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefix">edgePathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKey">edgeTokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSalt">edgeTokenSalt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuth">isEdgeTokenAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyA">originAuthSecretKeyA</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyB">originAuthSecretKeyB</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceA">originAuthSecretKeyNonceA</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceB">originAuthSecretKeyNonceB</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryption">originAuthSignEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignType">originAuthSignType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `edgeHostnameInput`<sup>Optional</sup> <a name="edgeHostnameInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostnameInput"></a>

```typescript
public readonly edgeHostnameInput: string;
```

- *Type:* string

---

##### `edgePathPrefixInput`<sup>Optional</sup> <a name="edgePathPrefixInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefixInput"></a>

```typescript
public readonly edgePathPrefixInput: string;
```

- *Type:* string

---

##### `edgeTokenKeyInput`<sup>Optional</sup> <a name="edgeTokenKeyInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKeyInput"></a>

```typescript
public readonly edgeTokenKeyInput: string;
```

- *Type:* string

---

##### `edgeTokenSaltInput`<sup>Optional</sup> <a name="edgeTokenSaltInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSaltInput"></a>

```typescript
public readonly edgeTokenSaltInput: string;
```

- *Type:* string

---

##### `isEdgeTokenAuthInput`<sup>Optional</sup> <a name="isEdgeTokenAuthInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuthInput"></a>

```typescript
public readonly isEdgeTokenAuthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `originAuthSecretKeyAInput`<sup>Optional</sup> <a name="originAuthSecretKeyAInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyAInput"></a>

```typescript
public readonly originAuthSecretKeyAInput: string;
```

- *Type:* string

---

##### `originAuthSecretKeyBInput`<sup>Optional</sup> <a name="originAuthSecretKeyBInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyBInput"></a>

```typescript
public readonly originAuthSecretKeyBInput: string;
```

- *Type:* string

---

##### `originAuthSecretKeyNonceAInput`<sup>Optional</sup> <a name="originAuthSecretKeyNonceAInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceAInput"></a>

```typescript
public readonly originAuthSecretKeyNonceAInput: string;
```

- *Type:* string

---

##### `originAuthSecretKeyNonceBInput`<sup>Optional</sup> <a name="originAuthSecretKeyNonceBInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceBInput"></a>

```typescript
public readonly originAuthSecretKeyNonceBInput: string;
```

- *Type:* string

---

##### `originAuthSignEncryptionInput`<sup>Optional</sup> <a name="originAuthSignEncryptionInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryptionInput"></a>

```typescript
public readonly originAuthSignEncryptionInput: string;
```

- *Type:* string

---

##### `originAuthSignTypeInput`<sup>Optional</sup> <a name="originAuthSignTypeInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignTypeInput"></a>

```typescript
public readonly originAuthSignTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `edgeHostname`<sup>Required</sup> <a name="edgeHostname" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostname"></a>

```typescript
public readonly edgeHostname: string;
```

- *Type:* string

---

##### `edgePathPrefix`<sup>Required</sup> <a name="edgePathPrefix" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefix"></a>

```typescript
public readonly edgePathPrefix: string;
```

- *Type:* string

---

##### `edgeTokenKey`<sup>Required</sup> <a name="edgeTokenKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKey"></a>

```typescript
public readonly edgeTokenKey: string;
```

- *Type:* string

---

##### `edgeTokenSalt`<sup>Required</sup> <a name="edgeTokenSalt" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSalt"></a>

```typescript
public readonly edgeTokenSalt: string;
```

- *Type:* string

---

##### `isEdgeTokenAuth`<sup>Required</sup> <a name="isEdgeTokenAuth" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuth"></a>

```typescript
public readonly isEdgeTokenAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `originAuthSecretKeyA`<sup>Required</sup> <a name="originAuthSecretKeyA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyA"></a>

```typescript
public readonly originAuthSecretKeyA: string;
```

- *Type:* string

---

##### `originAuthSecretKeyB`<sup>Required</sup> <a name="originAuthSecretKeyB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyB"></a>

```typescript
public readonly originAuthSecretKeyB: string;
```

- *Type:* string

---

##### `originAuthSecretKeyNonceA`<sup>Required</sup> <a name="originAuthSecretKeyNonceA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceA"></a>

```typescript
public readonly originAuthSecretKeyNonceA: string;
```

- *Type:* string

---

##### `originAuthSecretKeyNonceB`<sup>Required</sup> <a name="originAuthSecretKeyNonceB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceB"></a>

```typescript
public readonly originAuthSecretKeyNonceB: string;
```

- *Type:* string

---

##### `originAuthSignEncryption`<sup>Required</sup> <a name="originAuthSignEncryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryption"></a>

```typescript
public readonly originAuthSignEncryption: string;
```

- *Type:* string

---

##### `originAuthSignType`<sup>Required</sup> <a name="originAuthSignType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignType"></a>

```typescript
public readonly originAuthSignType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaServicesStreamCdnConfigConfigA;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

---


### MediaServicesStreamCdnConfigLocksList <a name="MediaServicesStreamCdnConfigLocksList" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer"></a>

```typescript
import { mediaServicesStreamCdnConfig } from 'rhizo-co-terraform-provider-oci'

new mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.get"></a>

```typescript
public get(index: number): MediaServicesStreamCdnConfigLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaServicesStreamCdnConfigLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>[]

---


### MediaServicesStreamCdnConfigLocksOutputReference <a name="MediaServicesStreamCdnConfigLocksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer"></a>

```typescript
import { mediaServicesStreamCdnConfig } from 'rhizo-co-terraform-provider-oci'

new mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetRelatedResourceId">resetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetTimeCreated">resetTimeCreated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetRelatedResourceId` <a name="resetRelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetRelatedResourceId"></a>

```typescript
public resetRelatedResourceId(): void
```

##### `resetTimeCreated` <a name="resetTimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetTimeCreated"></a>

```typescript
public resetTimeCreated(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceIdInput">relatedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreatedInput">timeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `relatedResourceIdInput`<sup>Optional</sup> <a name="relatedResourceIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceIdInput"></a>

```typescript
public readonly relatedResourceIdInput: string;
```

- *Type:* string

---

##### `timeCreatedInput`<sup>Optional</sup> <a name="timeCreatedInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreatedInput"></a>

```typescript
public readonly timeCreatedInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaServicesStreamCdnConfigLocks;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>

---


### MediaServicesStreamCdnConfigTimeoutsOutputReference <a name="MediaServicesStreamCdnConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { mediaServicesStreamCdnConfig } from 'rhizo-co-terraform-provider-oci'

new mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaServicesStreamCdnConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>

---



