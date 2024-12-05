# `fusionAppsFusionEnvironmentDataMaskingActivity` Submodule <a name="`fusionAppsFusionEnvironmentDataMaskingActivity` Submodule" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FusionAppsFusionEnvironmentDataMaskingActivity <a name="FusionAppsFusionEnvironmentDataMaskingActivity" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity oci_fusion_apps_fusion_environment_data_masking_activity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentDataMaskingActivity } from 'rhizo-co-terraform-provider-oci'

new fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity(scope: Construct, id: string, config: FusionAppsFusionEnvironmentDataMaskingActivityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig">FusionAppsFusionEnvironmentDataMaskingActivityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig">FusionAppsFusionEnvironmentDataMaskingActivityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.resetIsResumeDataMasking">resetIsResumeDataMasking</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.putTimeouts"></a>

```typescript
public putTimeouts(value: FusionAppsFusionEnvironmentDataMaskingActivityTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts">FusionAppsFusionEnvironmentDataMaskingActivityTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsResumeDataMasking` <a name="resetIsResumeDataMasking" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.resetIsResumeDataMasking"></a>

```typescript
public resetIsResumeDataMasking(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FusionAppsFusionEnvironmentDataMaskingActivity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isConstruct"></a>

```typescript
import { fusionAppsFusionEnvironmentDataMaskingActivity } from 'rhizo-co-terraform-provider-oci'

fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isTerraformElement"></a>

```typescript
import { fusionAppsFusionEnvironmentDataMaskingActivity } from 'rhizo-co-terraform-provider-oci'

fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isTerraformResource"></a>

```typescript
import { fusionAppsFusionEnvironmentDataMaskingActivity } from 'rhizo-co-terraform-provider-oci'

fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport"></a>

```typescript
import { fusionAppsFusionEnvironmentDataMaskingActivity } from 'rhizo-co-terraform-provider-oci'

fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FusionAppsFusionEnvironmentDataMaskingActivity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FusionAppsFusionEnvironmentDataMaskingActivity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FusionAppsFusionEnvironmentDataMaskingActivity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FusionAppsFusionEnvironmentDataMaskingActivity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingFinish">timeMaskingFinish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingStart">timeMaskingStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference">FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentIdInput">fusionEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.isResumeDataMaskingInput">isResumeDataMaskingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts">FusionAppsFusionEnvironmentDataMaskingActivityTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.isResumeDataMasking">isResumeDataMasking</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeMaskingFinish`<sup>Required</sup> <a name="timeMaskingFinish" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingFinish"></a>

```typescript
public readonly timeMaskingFinish: string;
```

- *Type:* string

---

##### `timeMaskingStart`<sup>Required</sup> <a name="timeMaskingStart" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingStart"></a>

```typescript
public readonly timeMaskingStart: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.timeouts"></a>

```typescript
public readonly timeouts: FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference">FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference</a>

---

##### `fusionEnvironmentIdInput`<sup>Optional</sup> <a name="fusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentIdInput"></a>

```typescript
public readonly fusionEnvironmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isResumeDataMaskingInput`<sup>Optional</sup> <a name="isResumeDataMaskingInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.isResumeDataMaskingInput"></a>

```typescript
public readonly isResumeDataMaskingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FusionAppsFusionEnvironmentDataMaskingActivityTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts">FusionAppsFusionEnvironmentDataMaskingActivityTimeouts</a>

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isResumeDataMasking`<sup>Required</sup> <a name="isResumeDataMasking" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.isResumeDataMasking"></a>

```typescript
public readonly isResumeDataMasking: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FusionAppsFusionEnvironmentDataMaskingActivityConfig <a name="FusionAppsFusionEnvironmentDataMaskingActivityConfig" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentDataMaskingActivity } from 'rhizo-co-terraform-provider-oci'

const fusionAppsFusionEnvironmentDataMaskingActivityConfig: fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#fusion_environment_id FusionAppsFusionEnvironmentDataMaskingActivity#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#id FusionAppsFusionEnvironmentDataMaskingActivity#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.isResumeDataMasking">isResumeDataMasking</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#is_resume_data_masking FusionAppsFusionEnvironmentDataMaskingActivity#is_resume_data_masking}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts">FusionAppsFusionEnvironmentDataMaskingActivityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#fusion_environment_id FusionAppsFusionEnvironmentDataMaskingActivity#fusion_environment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#id FusionAppsFusionEnvironmentDataMaskingActivity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isResumeDataMasking`<sup>Optional</sup> <a name="isResumeDataMasking" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.isResumeDataMasking"></a>

```typescript
public readonly isResumeDataMasking: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#is_resume_data_masking FusionAppsFusionEnvironmentDataMaskingActivity#is_resume_data_masking}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FusionAppsFusionEnvironmentDataMaskingActivityTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts">FusionAppsFusionEnvironmentDataMaskingActivityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#timeouts FusionAppsFusionEnvironmentDataMaskingActivity#timeouts}

---

### FusionAppsFusionEnvironmentDataMaskingActivityTimeouts <a name="FusionAppsFusionEnvironmentDataMaskingActivityTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentDataMaskingActivity } from 'rhizo-co-terraform-provider-oci'

const fusionAppsFusionEnvironmentDataMaskingActivityTimeouts: fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#create FusionAppsFusionEnvironmentDataMaskingActivity#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#delete FusionAppsFusionEnvironmentDataMaskingActivity#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#update FusionAppsFusionEnvironmentDataMaskingActivity#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#create FusionAppsFusionEnvironmentDataMaskingActivity#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#delete FusionAppsFusionEnvironmentDataMaskingActivity#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#update FusionAppsFusionEnvironmentDataMaskingActivity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference <a name="FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentDataMaskingActivity } from 'rhizo-co-terraform-provider-oci'

new fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts">FusionAppsFusionEnvironmentDataMaskingActivityTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FusionAppsFusionEnvironmentDataMaskingActivityTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts">FusionAppsFusionEnvironmentDataMaskingActivityTimeouts</a>

---



