# `fusionAppsFusionEnvironmentRefreshActivity` Submodule <a name="`fusionAppsFusionEnvironmentRefreshActivity` Submodule" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FusionAppsFusionEnvironmentRefreshActivity <a name="FusionAppsFusionEnvironmentRefreshActivity" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity oci_fusion_apps_fusion_environment_refresh_activity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

new fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity(scope: Construct, id: string, config: FusionAppsFusionEnvironmentRefreshActivityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig">FusionAppsFusionEnvironmentRefreshActivityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig">FusionAppsFusionEnvironmentRefreshActivityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.resetIsDataMaskingOpted">resetIsDataMaskingOpted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.putTimeouts"></a>

```typescript
public putTimeouts(value: FusionAppsFusionEnvironmentRefreshActivityTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts">FusionAppsFusionEnvironmentRefreshActivityTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsDataMaskingOpted` <a name="resetIsDataMaskingOpted" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.resetIsDataMaskingOpted"></a>

```typescript
public resetIsDataMaskingOpted(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FusionAppsFusionEnvironmentRefreshActivity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isConstruct"></a>

```typescript
import { fusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isTerraformElement"></a>

```typescript
import { fusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isTerraformResource"></a>

```typescript
import { fusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport"></a>

```typescript
import { fusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FusionAppsFusionEnvironmentRefreshActivity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FusionAppsFusionEnvironmentRefreshActivity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FusionAppsFusionEnvironmentRefreshActivity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FusionAppsFusionEnvironmentRefreshActivity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.refreshActivityId">refreshActivityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.refreshIssueDetailsList">refreshIssueDetailsList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList">FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.serviceAvailability">serviceAvailability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeAccepted">timeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeExpectedFinish">timeExpectedFinish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeOfRestorationPoint">timeOfRestorationPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference">FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.fusionEnvironmentIdInput">fusionEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.isDataMaskingOptedInput">isDataMaskingOptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.sourceFusionEnvironmentIdInput">sourceFusionEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts">FusionAppsFusionEnvironmentRefreshActivityTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.isDataMaskingOpted">isDataMaskingOpted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.sourceFusionEnvironmentId">sourceFusionEnvironmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `refreshActivityId`<sup>Required</sup> <a name="refreshActivityId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.refreshActivityId"></a>

```typescript
public readonly refreshActivityId: string;
```

- *Type:* string

---

##### `refreshIssueDetailsList`<sup>Required</sup> <a name="refreshIssueDetailsList" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.refreshIssueDetailsList"></a>

```typescript
public readonly refreshIssueDetailsList: FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList">FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList</a>

---

##### `serviceAvailability`<sup>Required</sup> <a name="serviceAvailability" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.serviceAvailability"></a>

```typescript
public readonly serviceAvailability: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeAccepted`<sup>Required</sup> <a name="timeAccepted" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeAccepted"></a>

```typescript
public readonly timeAccepted: string;
```

- *Type:* string

---

##### `timeExpectedFinish`<sup>Required</sup> <a name="timeExpectedFinish" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeExpectedFinish"></a>

```typescript
public readonly timeExpectedFinish: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeOfRestorationPoint`<sup>Required</sup> <a name="timeOfRestorationPoint" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeOfRestorationPoint"></a>

```typescript
public readonly timeOfRestorationPoint: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeouts"></a>

```typescript
public readonly timeouts: FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference">FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `fusionEnvironmentIdInput`<sup>Optional</sup> <a name="fusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.fusionEnvironmentIdInput"></a>

```typescript
public readonly fusionEnvironmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isDataMaskingOptedInput`<sup>Optional</sup> <a name="isDataMaskingOptedInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.isDataMaskingOptedInput"></a>

```typescript
public readonly isDataMaskingOptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceFusionEnvironmentIdInput`<sup>Optional</sup> <a name="sourceFusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.sourceFusionEnvironmentIdInput"></a>

```typescript
public readonly sourceFusionEnvironmentIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FusionAppsFusionEnvironmentRefreshActivityTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts">FusionAppsFusionEnvironmentRefreshActivityTimeouts</a>

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDataMaskingOpted`<sup>Required</sup> <a name="isDataMaskingOpted" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.isDataMaskingOpted"></a>

```typescript
public readonly isDataMaskingOpted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceFusionEnvironmentId`<sup>Required</sup> <a name="sourceFusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.sourceFusionEnvironmentId"></a>

```typescript
public readonly sourceFusionEnvironmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FusionAppsFusionEnvironmentRefreshActivityConfig <a name="FusionAppsFusionEnvironmentRefreshActivityConfig" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

const fusionAppsFusionEnvironmentRefreshActivityConfig: fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#fusion_environment_id FusionAppsFusionEnvironmentRefreshActivity#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.sourceFusionEnvironmentId">sourceFusionEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#source_fusion_environment_id FusionAppsFusionEnvironmentRefreshActivity#source_fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#id FusionAppsFusionEnvironmentRefreshActivity#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.isDataMaskingOpted">isDataMaskingOpted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#is_data_masking_opted FusionAppsFusionEnvironmentRefreshActivity#is_data_masking_opted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts">FusionAppsFusionEnvironmentRefreshActivityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#fusion_environment_id FusionAppsFusionEnvironmentRefreshActivity#fusion_environment_id}.

---

##### `sourceFusionEnvironmentId`<sup>Required</sup> <a name="sourceFusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.sourceFusionEnvironmentId"></a>

```typescript
public readonly sourceFusionEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#source_fusion_environment_id FusionAppsFusionEnvironmentRefreshActivity#source_fusion_environment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#id FusionAppsFusionEnvironmentRefreshActivity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDataMaskingOpted`<sup>Optional</sup> <a name="isDataMaskingOpted" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.isDataMaskingOpted"></a>

```typescript
public readonly isDataMaskingOpted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#is_data_masking_opted FusionAppsFusionEnvironmentRefreshActivity#is_data_masking_opted}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FusionAppsFusionEnvironmentRefreshActivityTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts">FusionAppsFusionEnvironmentRefreshActivityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#timeouts FusionAppsFusionEnvironmentRefreshActivity#timeouts}

---

### FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct <a name="FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

const fusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct: fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct = { ... }
```


### FusionAppsFusionEnvironmentRefreshActivityTimeouts <a name="FusionAppsFusionEnvironmentRefreshActivityTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

const fusionAppsFusionEnvironmentRefreshActivityTimeouts: fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#create FusionAppsFusionEnvironmentRefreshActivity#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#create FusionAppsFusionEnvironmentRefreshActivity#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList <a name="FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

new fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.get"></a>

```typescript
public get(index: number): FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference <a name="FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

new fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.refreshIssues">refreshIssues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct">FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `refreshIssues`<sup>Required</sup> <a name="refreshIssues" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.refreshIssues"></a>

```typescript
public readonly refreshIssues: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct">FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct</a>

---


### FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference <a name="FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

new fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts">FusionAppsFusionEnvironmentRefreshActivityTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FusionAppsFusionEnvironmentRefreshActivityTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts">FusionAppsFusionEnvironmentRefreshActivityTimeouts</a>

---



