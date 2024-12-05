# `waaWebAppAccelerationPolicy` Submodule <a name="`waaWebAppAccelerationPolicy` Submodule" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaaWebAppAccelerationPolicy <a name="WaaWebAppAccelerationPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy oci_waa_web_app_acceleration_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer"></a>

```typescript
import { waaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

new waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy(scope: Construct, id: string, config: WaaWebAppAccelerationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig">WaaWebAppAccelerationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig">WaaWebAppAccelerationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCachingPolicy">putResponseCachingPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCompressionPolicy">putResponseCompressionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetResponseCachingPolicy">resetResponseCachingPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetResponseCompressionPolicy">resetResponseCompressionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetSystemTags">resetSystemTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResponseCachingPolicy` <a name="putResponseCachingPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCachingPolicy"></a>

```typescript
public putResponseCachingPolicy(value: WaaWebAppAccelerationPolicyResponseCachingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCachingPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a>

---

##### `putResponseCompressionPolicy` <a name="putResponseCompressionPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCompressionPolicy"></a>

```typescript
public putResponseCompressionPolicy(value: WaaWebAppAccelerationPolicyResponseCompressionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCompressionPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: WaaWebAppAccelerationPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResponseCachingPolicy` <a name="resetResponseCachingPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetResponseCachingPolicy"></a>

```typescript
public resetResponseCachingPolicy(): void
```

##### `resetResponseCompressionPolicy` <a name="resetResponseCompressionPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetResponseCompressionPolicy"></a>

```typescript
public resetResponseCompressionPolicy(): void
```

##### `resetSystemTags` <a name="resetSystemTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetSystemTags"></a>

```typescript
public resetSystemTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WaaWebAppAccelerationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isConstruct"></a>

```typescript
import { waaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformElement"></a>

```typescript
import { waaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformResource"></a>

```typescript
import { waaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport"></a>

```typescript
import { waaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WaaWebAppAccelerationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WaaWebAppAccelerationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WaaWebAppAccelerationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WaaWebAppAccelerationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCachingPolicy">responseCachingPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference">WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCompressionPolicy">responseCompressionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference">WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference">WaaWebAppAccelerationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCachingPolicyInput">responseCachingPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCompressionPolicyInput">responseCompressionPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.systemTagsInput">systemTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.systemTags">systemTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `responseCachingPolicy`<sup>Required</sup> <a name="responseCachingPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCachingPolicy"></a>

```typescript
public readonly responseCachingPolicy: WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference">WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference</a>

---

##### `responseCompressionPolicy`<sup>Required</sup> <a name="responseCompressionPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCompressionPolicy"></a>

```typescript
public readonly responseCompressionPolicy: WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference">WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: WaaWebAppAccelerationPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference">WaaWebAppAccelerationPolicyTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `responseCachingPolicyInput`<sup>Optional</sup> <a name="responseCachingPolicyInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCachingPolicyInput"></a>

```typescript
public readonly responseCachingPolicyInput: WaaWebAppAccelerationPolicyResponseCachingPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a>

---

##### `responseCompressionPolicyInput`<sup>Optional</sup> <a name="responseCompressionPolicyInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCompressionPolicyInput"></a>

```typescript
public readonly responseCompressionPolicyInput: WaaWebAppAccelerationPolicyResponseCompressionPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a>

---

##### `systemTagsInput`<sup>Optional</sup> <a name="systemTagsInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.systemTagsInput"></a>

```typescript
public readonly systemTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WaaWebAppAccelerationPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.systemTags"></a>

```typescript
public readonly systemTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WaaWebAppAccelerationPolicyConfig <a name="WaaWebAppAccelerationPolicyConfig" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.Initializer"></a>

```typescript
import { waaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

const waaWebAppAccelerationPolicyConfig: waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#compartment_id WaaWebAppAccelerationPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#defined_tags WaaWebAppAccelerationPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#display_name WaaWebAppAccelerationPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#freeform_tags WaaWebAppAccelerationPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#id WaaWebAppAccelerationPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.responseCachingPolicy">responseCachingPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a></code> | response_caching_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.responseCompressionPolicy">responseCompressionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a></code> | response_compression_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.systemTags">systemTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#system_tags WaaWebAppAccelerationPolicy#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#compartment_id WaaWebAppAccelerationPolicy#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#defined_tags WaaWebAppAccelerationPolicy#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#display_name WaaWebAppAccelerationPolicy#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#freeform_tags WaaWebAppAccelerationPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#id WaaWebAppAccelerationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `responseCachingPolicy`<sup>Optional</sup> <a name="responseCachingPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.responseCachingPolicy"></a>

```typescript
public readonly responseCachingPolicy: WaaWebAppAccelerationPolicyResponseCachingPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a>

response_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#response_caching_policy WaaWebAppAccelerationPolicy#response_caching_policy}

---

##### `responseCompressionPolicy`<sup>Optional</sup> <a name="responseCompressionPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.responseCompressionPolicy"></a>

```typescript
public readonly responseCompressionPolicy: WaaWebAppAccelerationPolicyResponseCompressionPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a>

response_compression_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#response_compression_policy WaaWebAppAccelerationPolicy#response_compression_policy}

---

##### `systemTags`<sup>Optional</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.systemTags"></a>

```typescript
public readonly systemTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#system_tags WaaWebAppAccelerationPolicy#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WaaWebAppAccelerationPolicyTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#timeouts WaaWebAppAccelerationPolicy#timeouts}

---

### WaaWebAppAccelerationPolicyResponseCachingPolicy <a name="WaaWebAppAccelerationPolicyResponseCachingPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy.Initializer"></a>

```typescript
import { waaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

const waaWebAppAccelerationPolicyResponseCachingPolicy: waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy.property.isResponseHeaderBasedCachingEnabled">isResponseHeaderBasedCachingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#is_response_header_based_caching_enabled WaaWebAppAccelerationPolicy#is_response_header_based_caching_enabled}. |

---

##### `isResponseHeaderBasedCachingEnabled`<sup>Optional</sup> <a name="isResponseHeaderBasedCachingEnabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy.property.isResponseHeaderBasedCachingEnabled"></a>

```typescript
public readonly isResponseHeaderBasedCachingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#is_response_header_based_caching_enabled WaaWebAppAccelerationPolicy#is_response_header_based_caching_enabled}.

---

### WaaWebAppAccelerationPolicyResponseCompressionPolicy <a name="WaaWebAppAccelerationPolicyResponseCompressionPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy.Initializer"></a>

```typescript
import { waaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

const waaWebAppAccelerationPolicyResponseCompressionPolicy: waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy.property.gzipCompression">gzipCompression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a></code> | gzip_compression block. |

---

##### `gzipCompression`<sup>Optional</sup> <a name="gzipCompression" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy.property.gzipCompression"></a>

```typescript
public readonly gzipCompression: WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a>

gzip_compression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#gzip_compression WaaWebAppAccelerationPolicy#gzip_compression}

---

### WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression <a name="WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression.Initializer"></a>

```typescript
import { waaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

const waaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression: waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#is_enabled WaaWebAppAccelerationPolicy#is_enabled}. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#is_enabled WaaWebAppAccelerationPolicy#is_enabled}.

---

### WaaWebAppAccelerationPolicyTimeouts <a name="WaaWebAppAccelerationPolicyTimeouts" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.Initializer"></a>

```typescript
import { waaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

const waaWebAppAccelerationPolicyTimeouts: waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#create WaaWebAppAccelerationPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#delete WaaWebAppAccelerationPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#update WaaWebAppAccelerationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#create WaaWebAppAccelerationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#delete WaaWebAppAccelerationPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#update WaaWebAppAccelerationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference <a name="WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer"></a>

```typescript
import { waaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

new waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resetIsResponseHeaderBasedCachingEnabled">resetIsResponseHeaderBasedCachingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsResponseHeaderBasedCachingEnabled` <a name="resetIsResponseHeaderBasedCachingEnabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resetIsResponseHeaderBasedCachingEnabled"></a>

```typescript
public resetIsResponseHeaderBasedCachingEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabledInput">isResponseHeaderBasedCachingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled">isResponseHeaderBasedCachingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponseHeaderBasedCachingEnabledInput`<sup>Optional</sup> <a name="isResponseHeaderBasedCachingEnabledInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabledInput"></a>

```typescript
public readonly isResponseHeaderBasedCachingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isResponseHeaderBasedCachingEnabled`<sup>Required</sup> <a name="isResponseHeaderBasedCachingEnabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled"></a>

```typescript
public readonly isResponseHeaderBasedCachingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WaaWebAppAccelerationPolicyResponseCachingPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a>

---


### WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference <a name="WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer"></a>

```typescript
import { waaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

new waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a>

---


### WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference <a name="WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer"></a>

```typescript
import { waaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

new waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.putGzipCompression">putGzipCompression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resetGzipCompression">resetGzipCompression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGzipCompression` <a name="putGzipCompression" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.putGzipCompression"></a>

```typescript
public putGzipCompression(value: WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.putGzipCompression.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a>

---

##### `resetGzipCompression` <a name="resetGzipCompression" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resetGzipCompression"></a>

```typescript
public resetGzipCompression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.gzipCompression">gzipCompression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.gzipCompressionInput">gzipCompressionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gzipCompression`<sup>Required</sup> <a name="gzipCompression" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.gzipCompression"></a>

```typescript
public readonly gzipCompression: WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference</a>

---

##### `gzipCompressionInput`<sup>Optional</sup> <a name="gzipCompressionInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.gzipCompressionInput"></a>

```typescript
public readonly gzipCompressionInput: WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WaaWebAppAccelerationPolicyResponseCompressionPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a>

---


### WaaWebAppAccelerationPolicyTimeoutsOutputReference <a name="WaaWebAppAccelerationPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { waaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

new waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WaaWebAppAccelerationPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a>

---



