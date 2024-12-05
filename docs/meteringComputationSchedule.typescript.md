# `meteringComputationSchedule` Submodule <a name="`meteringComputationSchedule` Submodule" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MeteringComputationSchedule <a name="MeteringComputationSchedule" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule oci_metering_computation_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer"></a>

```typescript
import { meteringComputationSchedule } from 'rhizo-co-terraform-provider-oci'

new meteringComputationSchedule.MeteringComputationSchedule(scope: Construct, id: string, config: MeteringComputationScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig">MeteringComputationScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig">MeteringComputationScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putQueryProperties">putQueryProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putResultLocation">putResultLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetOutputFileFormat">resetOutputFileFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetQueryProperties">resetQueryProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetSavedReportId">resetSavedReportId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putQueryProperties` <a name="putQueryProperties" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putQueryProperties"></a>

```typescript
public putQueryProperties(value: MeteringComputationScheduleQueryProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putQueryProperties.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a>

---

##### `putResultLocation` <a name="putResultLocation" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putResultLocation"></a>

```typescript
public putResultLocation(value: MeteringComputationScheduleResultLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putResultLocation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putTimeouts"></a>

```typescript
public putTimeouts(value: MeteringComputationScheduleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOutputFileFormat` <a name="resetOutputFileFormat" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetOutputFileFormat"></a>

```typescript
public resetOutputFileFormat(): void
```

##### `resetQueryProperties` <a name="resetQueryProperties" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetQueryProperties"></a>

```typescript
public resetQueryProperties(): void
```

##### `resetSavedReportId` <a name="resetSavedReportId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetSavedReportId"></a>

```typescript
public resetSavedReportId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MeteringComputationSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isConstruct"></a>

```typescript
import { meteringComputationSchedule } from 'rhizo-co-terraform-provider-oci'

meteringComputationSchedule.MeteringComputationSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformElement"></a>

```typescript
import { meteringComputationSchedule } from 'rhizo-co-terraform-provider-oci'

meteringComputationSchedule.MeteringComputationSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformResource"></a>

```typescript
import { meteringComputationSchedule } from 'rhizo-co-terraform-provider-oci'

meteringComputationSchedule.MeteringComputationSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport"></a>

```typescript
import { meteringComputationSchedule } from 'rhizo-co-terraform-provider-oci'

meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MeteringComputationSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MeteringComputationSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MeteringComputationSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MeteringComputationSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.queryProperties">queryProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference">MeteringComputationScheduleQueryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.resultLocation">resultLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference">MeteringComputationScheduleResultLocationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeNextRun">timeNextRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference">MeteringComputationScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.outputFileFormatInput">outputFileFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.queryPropertiesInput">queryPropertiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.resultLocationInput">resultLocationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.savedReportIdInput">savedReportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.scheduleRecurrencesInput">scheduleRecurrencesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeScheduledInput">timeScheduledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.outputFileFormat">outputFileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.savedReportId">savedReportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.scheduleRecurrences">scheduleRecurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeScheduled">timeScheduled</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `queryProperties`<sup>Required</sup> <a name="queryProperties" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.queryProperties"></a>

```typescript
public readonly queryProperties: MeteringComputationScheduleQueryPropertiesOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference">MeteringComputationScheduleQueryPropertiesOutputReference</a>

---

##### `resultLocation`<sup>Required</sup> <a name="resultLocation" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.resultLocation"></a>

```typescript
public readonly resultLocation: MeteringComputationScheduleResultLocationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference">MeteringComputationScheduleResultLocationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeNextRun`<sup>Required</sup> <a name="timeNextRun" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeNextRun"></a>

```typescript
public readonly timeNextRun: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeouts"></a>

```typescript
public readonly timeouts: MeteringComputationScheduleTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference">MeteringComputationScheduleTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputFileFormatInput`<sup>Optional</sup> <a name="outputFileFormatInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.outputFileFormatInput"></a>

```typescript
public readonly outputFileFormatInput: string;
```

- *Type:* string

---

##### `queryPropertiesInput`<sup>Optional</sup> <a name="queryPropertiesInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.queryPropertiesInput"></a>

```typescript
public readonly queryPropertiesInput: MeteringComputationScheduleQueryProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a>

---

##### `resultLocationInput`<sup>Optional</sup> <a name="resultLocationInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.resultLocationInput"></a>

```typescript
public readonly resultLocationInput: MeteringComputationScheduleResultLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a>

---

##### `savedReportIdInput`<sup>Optional</sup> <a name="savedReportIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.savedReportIdInput"></a>

```typescript
public readonly savedReportIdInput: string;
```

- *Type:* string

---

##### `scheduleRecurrencesInput`<sup>Optional</sup> <a name="scheduleRecurrencesInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.scheduleRecurrencesInput"></a>

```typescript
public readonly scheduleRecurrencesInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MeteringComputationScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a>

---

##### `timeScheduledInput`<sup>Optional</sup> <a name="timeScheduledInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeScheduledInput"></a>

```typescript
public readonly timeScheduledInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputFileFormat`<sup>Required</sup> <a name="outputFileFormat" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.outputFileFormat"></a>

```typescript
public readonly outputFileFormat: string;
```

- *Type:* string

---

##### `savedReportId`<sup>Required</sup> <a name="savedReportId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.savedReportId"></a>

```typescript
public readonly savedReportId: string;
```

- *Type:* string

---

##### `scheduleRecurrences`<sup>Required</sup> <a name="scheduleRecurrences" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.scheduleRecurrences"></a>

```typescript
public readonly scheduleRecurrences: string;
```

- *Type:* string

---

##### `timeScheduled`<sup>Required</sup> <a name="timeScheduled" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeScheduled"></a>

```typescript
public readonly timeScheduled: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MeteringComputationScheduleConfig <a name="MeteringComputationScheduleConfig" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.Initializer"></a>

```typescript
import { meteringComputationSchedule } from 'rhizo-co-terraform-provider-oci'

const meteringComputationScheduleConfig: meteringComputationSchedule.MeteringComputationScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#compartment_id MeteringComputationSchedule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#name MeteringComputationSchedule#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.resultLocation">resultLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a></code> | result_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.scheduleRecurrences">scheduleRecurrences</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#schedule_recurrences MeteringComputationSchedule#schedule_recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.timeScheduled">timeScheduled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_scheduled MeteringComputationSchedule#time_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#defined_tags MeteringComputationSchedule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#description MeteringComputationSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#freeform_tags MeteringComputationSchedule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#id MeteringComputationSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.outputFileFormat">outputFileFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#output_file_format MeteringComputationSchedule#output_file_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.queryProperties">queryProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a></code> | query_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.savedReportId">savedReportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#saved_report_id MeteringComputationSchedule#saved_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#compartment_id MeteringComputationSchedule#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#name MeteringComputationSchedule#name}.

---

##### `resultLocation`<sup>Required</sup> <a name="resultLocation" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.resultLocation"></a>

```typescript
public readonly resultLocation: MeteringComputationScheduleResultLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a>

result_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#result_location MeteringComputationSchedule#result_location}

---

##### `scheduleRecurrences`<sup>Required</sup> <a name="scheduleRecurrences" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.scheduleRecurrences"></a>

```typescript
public readonly scheduleRecurrences: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#schedule_recurrences MeteringComputationSchedule#schedule_recurrences}.

---

##### `timeScheduled`<sup>Required</sup> <a name="timeScheduled" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.timeScheduled"></a>

```typescript
public readonly timeScheduled: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_scheduled MeteringComputationSchedule#time_scheduled}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#defined_tags MeteringComputationSchedule#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#description MeteringComputationSchedule#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#freeform_tags MeteringComputationSchedule#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#id MeteringComputationSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outputFileFormat`<sup>Optional</sup> <a name="outputFileFormat" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.outputFileFormat"></a>

```typescript
public readonly outputFileFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#output_file_format MeteringComputationSchedule#output_file_format}.

---

##### `queryProperties`<sup>Optional</sup> <a name="queryProperties" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.queryProperties"></a>

```typescript
public readonly queryProperties: MeteringComputationScheduleQueryProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a>

query_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#query_properties MeteringComputationSchedule#query_properties}

---

##### `savedReportId`<sup>Optional</sup> <a name="savedReportId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.savedReportId"></a>

```typescript
public readonly savedReportId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#saved_report_id MeteringComputationSchedule#saved_report_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MeteringComputationScheduleTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#timeouts MeteringComputationSchedule#timeouts}

---

### MeteringComputationScheduleQueryProperties <a name="MeteringComputationScheduleQueryProperties" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.Initializer"></a>

```typescript
import { meteringComputationSchedule } from 'rhizo-co-terraform-provider-oci'

const meteringComputationScheduleQueryProperties: meteringComputationSchedule.MeteringComputationScheduleQueryProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.dateRange">dateRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a></code> | date_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.granularity">granularity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#granularity MeteringComputationSchedule#granularity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.compartmentDepth">compartmentDepth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#compartment_depth MeteringComputationSchedule#compartment_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#filter MeteringComputationSchedule#filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.groupBy">groupBy</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#group_by MeteringComputationSchedule#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.groupByTag">groupByTag</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>[]</code> | group_by_tag block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.isAggregateByTime">isAggregateByTime</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#is_aggregate_by_time MeteringComputationSchedule#is_aggregate_by_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.queryType">queryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#query_type MeteringComputationSchedule#query_type}. |

---

##### `dateRange`<sup>Required</sup> <a name="dateRange" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.dateRange"></a>

```typescript
public readonly dateRange: MeteringComputationScheduleQueryPropertiesDateRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a>

date_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#date_range MeteringComputationSchedule#date_range}

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#granularity MeteringComputationSchedule#granularity}.

---

##### `compartmentDepth`<sup>Optional</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.compartmentDepth"></a>

```typescript
public readonly compartmentDepth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#compartment_depth MeteringComputationSchedule#compartment_depth}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#filter MeteringComputationSchedule#filter}.

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#group_by MeteringComputationSchedule#group_by}.

---

##### `groupByTag`<sup>Optional</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.groupByTag"></a>

```typescript
public readonly groupByTag: IResolvable | MeteringComputationScheduleQueryPropertiesGroupByTag[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>[]

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#group_by_tag MeteringComputationSchedule#group_by_tag}

---

##### `isAggregateByTime`<sup>Optional</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.isAggregateByTime"></a>

```typescript
public readonly isAggregateByTime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#is_aggregate_by_time MeteringComputationSchedule#is_aggregate_by_time}.

---

##### `queryType`<sup>Optional</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#query_type MeteringComputationSchedule#query_type}.

---

### MeteringComputationScheduleQueryPropertiesDateRange <a name="MeteringComputationScheduleQueryPropertiesDateRange" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.Initializer"></a>

```typescript
import { meteringComputationSchedule } from 'rhizo-co-terraform-provider-oci'

const meteringComputationScheduleQueryPropertiesDateRange: meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.dateRangeType">dateRangeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#date_range_type MeteringComputationSchedule#date_range_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.dynamicDateRangeType">dynamicDateRangeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#dynamic_date_range_type MeteringComputationSchedule#dynamic_date_range_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.timeUsageEnded">timeUsageEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_usage_ended MeteringComputationSchedule#time_usage_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.timeUsageStarted">timeUsageStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_usage_started MeteringComputationSchedule#time_usage_started}. |

---

##### `dateRangeType`<sup>Required</sup> <a name="dateRangeType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.dateRangeType"></a>

```typescript
public readonly dateRangeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#date_range_type MeteringComputationSchedule#date_range_type}.

---

##### `dynamicDateRangeType`<sup>Optional</sup> <a name="dynamicDateRangeType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.dynamicDateRangeType"></a>

```typescript
public readonly dynamicDateRangeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#dynamic_date_range_type MeteringComputationSchedule#dynamic_date_range_type}.

---

##### `timeUsageEnded`<sup>Optional</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.timeUsageEnded"></a>

```typescript
public readonly timeUsageEnded: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_usage_ended MeteringComputationSchedule#time_usage_ended}.

---

##### `timeUsageStarted`<sup>Optional</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.timeUsageStarted"></a>

```typescript
public readonly timeUsageStarted: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_usage_started MeteringComputationSchedule#time_usage_started}.

---

### MeteringComputationScheduleQueryPropertiesGroupByTag <a name="MeteringComputationScheduleQueryPropertiesGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.Initializer"></a>

```typescript
import { meteringComputationSchedule } from 'rhizo-co-terraform-provider-oci'

const meteringComputationScheduleQueryPropertiesGroupByTag: meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#key MeteringComputationSchedule#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#namespace MeteringComputationSchedule#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#value MeteringComputationSchedule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#key MeteringComputationSchedule#key}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#namespace MeteringComputationSchedule#namespace}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#value MeteringComputationSchedule#value}.

---

### MeteringComputationScheduleResultLocation <a name="MeteringComputationScheduleResultLocation" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.Initializer"></a>

```typescript
import { meteringComputationSchedule } from 'rhizo-co-terraform-provider-oci'

const meteringComputationScheduleResultLocation: meteringComputationSchedule.MeteringComputationScheduleResultLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#bucket MeteringComputationSchedule#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.locationType">locationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#location_type MeteringComputationSchedule#location_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#namespace MeteringComputationSchedule#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#region MeteringComputationSchedule#region}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#bucket MeteringComputationSchedule#bucket}.

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.locationType"></a>

```typescript
public readonly locationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#location_type MeteringComputationSchedule#location_type}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#namespace MeteringComputationSchedule#namespace}.

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#region MeteringComputationSchedule#region}.

---

### MeteringComputationScheduleTimeouts <a name="MeteringComputationScheduleTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.Initializer"></a>

```typescript
import { meteringComputationSchedule } from 'rhizo-co-terraform-provider-oci'

const meteringComputationScheduleTimeouts: meteringComputationSchedule.MeteringComputationScheduleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#create MeteringComputationSchedule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#delete MeteringComputationSchedule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#update MeteringComputationSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#create MeteringComputationSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#delete MeteringComputationSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#update MeteringComputationSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MeteringComputationScheduleQueryPropertiesDateRangeOutputReference <a name="MeteringComputationScheduleQueryPropertiesDateRangeOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer"></a>

```typescript
import { meteringComputationSchedule } from 'rhizo-co-terraform-provider-oci'

new meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetDynamicDateRangeType">resetDynamicDateRangeType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetTimeUsageEnded">resetTimeUsageEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetTimeUsageStarted">resetTimeUsageStarted</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDynamicDateRangeType` <a name="resetDynamicDateRangeType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetDynamicDateRangeType"></a>

```typescript
public resetDynamicDateRangeType(): void
```

##### `resetTimeUsageEnded` <a name="resetTimeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetTimeUsageEnded"></a>

```typescript
public resetTimeUsageEnded(): void
```

##### `resetTimeUsageStarted` <a name="resetTimeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetTimeUsageStarted"></a>

```typescript
public resetTimeUsageStarted(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dateRangeTypeInput">dateRangeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dynamicDateRangeTypeInput">dynamicDateRangeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageEndedInput">timeUsageEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageStartedInput">timeUsageStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dateRangeType">dateRangeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dynamicDateRangeType">dynamicDateRangeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageEnded">timeUsageEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageStarted">timeUsageStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateRangeTypeInput`<sup>Optional</sup> <a name="dateRangeTypeInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dateRangeTypeInput"></a>

```typescript
public readonly dateRangeTypeInput: string;
```

- *Type:* string

---

##### `dynamicDateRangeTypeInput`<sup>Optional</sup> <a name="dynamicDateRangeTypeInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dynamicDateRangeTypeInput"></a>

```typescript
public readonly dynamicDateRangeTypeInput: string;
```

- *Type:* string

---

##### `timeUsageEndedInput`<sup>Optional</sup> <a name="timeUsageEndedInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageEndedInput"></a>

```typescript
public readonly timeUsageEndedInput: string;
```

- *Type:* string

---

##### `timeUsageStartedInput`<sup>Optional</sup> <a name="timeUsageStartedInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageStartedInput"></a>

```typescript
public readonly timeUsageStartedInput: string;
```

- *Type:* string

---

##### `dateRangeType`<sup>Required</sup> <a name="dateRangeType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dateRangeType"></a>

```typescript
public readonly dateRangeType: string;
```

- *Type:* string

---

##### `dynamicDateRangeType`<sup>Required</sup> <a name="dynamicDateRangeType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dynamicDateRangeType"></a>

```typescript
public readonly dynamicDateRangeType: string;
```

- *Type:* string

---

##### `timeUsageEnded`<sup>Required</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageEnded"></a>

```typescript
public readonly timeUsageEnded: string;
```

- *Type:* string

---

##### `timeUsageStarted`<sup>Required</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageStarted"></a>

```typescript
public readonly timeUsageStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MeteringComputationScheduleQueryPropertiesDateRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a>

---


### MeteringComputationScheduleQueryPropertiesGroupByTagList <a name="MeteringComputationScheduleQueryPropertiesGroupByTagList" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer"></a>

```typescript
import { meteringComputationSchedule } from 'rhizo-co-terraform-provider-oci'

new meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.get"></a>

```typescript
public get(index: number): MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MeteringComputationScheduleQueryPropertiesGroupByTag[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>[]

---


### MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference <a name="MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer"></a>

```typescript
import { meteringComputationSchedule } from 'rhizo-co-terraform-provider-oci'

new meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MeteringComputationScheduleQueryPropertiesGroupByTag;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>

---


### MeteringComputationScheduleQueryPropertiesOutputReference <a name="MeteringComputationScheduleQueryPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.Initializer"></a>

```typescript
import { meteringComputationSchedule } from 'rhizo-co-terraform-provider-oci'

new meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putDateRange">putDateRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putGroupByTag">putGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetCompartmentDepth">resetCompartmentDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetGroupByTag">resetGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetIsAggregateByTime">resetIsAggregateByTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetQueryType">resetQueryType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDateRange` <a name="putDateRange" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putDateRange"></a>

```typescript
public putDateRange(value: MeteringComputationScheduleQueryPropertiesDateRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putDateRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a>

---

##### `putGroupByTag` <a name="putGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putGroupByTag"></a>

```typescript
public putGroupByTag(value: IResolvable | MeteringComputationScheduleQueryPropertiesGroupByTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putGroupByTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>[]

---

##### `resetCompartmentDepth` <a name="resetCompartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetCompartmentDepth"></a>

```typescript
public resetCompartmentDepth(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetGroupByTag` <a name="resetGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetGroupByTag"></a>

```typescript
public resetGroupByTag(): void
```

##### `resetIsAggregateByTime` <a name="resetIsAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetIsAggregateByTime"></a>

```typescript
public resetIsAggregateByTime(): void
```

##### `resetQueryType` <a name="resetQueryType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetQueryType"></a>

```typescript
public resetQueryType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.dateRange">dateRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference">MeteringComputationScheduleQueryPropertiesDateRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByTag">groupByTag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList">MeteringComputationScheduleQueryPropertiesGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.compartmentDepthInput">compartmentDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.dateRangeInput">dateRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.granularityInput">granularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByInput">groupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByTagInput">groupByTagInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.isAggregateByTimeInput">isAggregateByTimeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.queryTypeInput">queryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.compartmentDepth">compartmentDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.granularity">granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupBy">groupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.isAggregateByTime">isAggregateByTime</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.queryType">queryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateRange`<sup>Required</sup> <a name="dateRange" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.dateRange"></a>

```typescript
public readonly dateRange: MeteringComputationScheduleQueryPropertiesDateRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference">MeteringComputationScheduleQueryPropertiesDateRangeOutputReference</a>

---

##### `groupByTag`<sup>Required</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByTag"></a>

```typescript
public readonly groupByTag: MeteringComputationScheduleQueryPropertiesGroupByTagList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList">MeteringComputationScheduleQueryPropertiesGroupByTagList</a>

---

##### `compartmentDepthInput`<sup>Optional</sup> <a name="compartmentDepthInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.compartmentDepthInput"></a>

```typescript
public readonly compartmentDepthInput: number;
```

- *Type:* number

---

##### `dateRangeInput`<sup>Optional</sup> <a name="dateRangeInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.dateRangeInput"></a>

```typescript
public readonly dateRangeInput: MeteringComputationScheduleQueryPropertiesDateRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.granularityInput"></a>

```typescript
public readonly granularityInput: string;
```

- *Type:* string

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByInput"></a>

```typescript
public readonly groupByInput: string[];
```

- *Type:* string[]

---

##### `groupByTagInput`<sup>Optional</sup> <a name="groupByTagInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByTagInput"></a>

```typescript
public readonly groupByTagInput: IResolvable | MeteringComputationScheduleQueryPropertiesGroupByTag[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>[]

---

##### `isAggregateByTimeInput`<sup>Optional</sup> <a name="isAggregateByTimeInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.isAggregateByTimeInput"></a>

```typescript
public readonly isAggregateByTimeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryTypeInput`<sup>Optional</sup> <a name="queryTypeInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.queryTypeInput"></a>

```typescript
public readonly queryTypeInput: string;
```

- *Type:* string

---

##### `compartmentDepth`<sup>Required</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.compartmentDepth"></a>

```typescript
public readonly compartmentDepth: number;
```

- *Type:* number

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

---

##### `isAggregateByTime`<sup>Required</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.isAggregateByTime"></a>

```typescript
public readonly isAggregateByTime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MeteringComputationScheduleQueryProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a>

---


### MeteringComputationScheduleResultLocationOutputReference <a name="MeteringComputationScheduleResultLocationOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.Initializer"></a>

```typescript
import { meteringComputationSchedule } from 'rhizo-co-terraform-provider-oci'

new meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.locationTypeInput">locationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.locationType">locationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `locationTypeInput`<sup>Optional</sup> <a name="locationTypeInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.locationTypeInput"></a>

```typescript
public readonly locationTypeInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.locationType"></a>

```typescript
public readonly locationType: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MeteringComputationScheduleResultLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a>

---


### MeteringComputationScheduleTimeoutsOutputReference <a name="MeteringComputationScheduleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.Initializer"></a>

```typescript
import { meteringComputationSchedule } from 'rhizo-co-terraform-provider-oci'

new meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MeteringComputationScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a>

---



