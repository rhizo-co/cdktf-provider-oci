# `resourceSchedulerSchedule` Submodule <a name="`resourceSchedulerSchedule` Submodule" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceSchedulerSchedule <a name="ResourceSchedulerSchedule" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule oci_resource_scheduler_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer"></a>

```typescript
import { resourceSchedulerSchedule } from 'rhizo-co-terraform-provider-oci'

new resourceSchedulerSchedule.ResourceSchedulerSchedule(scope: Construct, id: string, config: ResourceSchedulerScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig">ResourceSchedulerScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig">ResourceSchedulerScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResourceFilters">putResourceFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResources">putResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResourceFilters">resetResourceFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeEnds">resetTimeEnds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeStarts">resetTimeStarts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceFilters` <a name="putResourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResourceFilters"></a>

```typescript
public putResourceFilters(value: IResolvable | ResourceSchedulerScheduleResourceFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResourceFilters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>[]

---

##### `putResources` <a name="putResources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResources"></a>

```typescript
public putResources(value: IResolvable | ResourceSchedulerScheduleResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putTimeouts"></a>

```typescript
public putTimeouts(value: ResourceSchedulerScheduleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceFilters` <a name="resetResourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResourceFilters"></a>

```typescript
public resetResourceFilters(): void
```

##### `resetResources` <a name="resetResources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeEnds` <a name="resetTimeEnds" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeEnds"></a>

```typescript
public resetTimeEnds(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeStarts` <a name="resetTimeStarts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeStarts"></a>

```typescript
public resetTimeStarts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceSchedulerSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isConstruct"></a>

```typescript
import { resourceSchedulerSchedule } from 'rhizo-co-terraform-provider-oci'

resourceSchedulerSchedule.ResourceSchedulerSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformElement"></a>

```typescript
import { resourceSchedulerSchedule } from 'rhizo-co-terraform-provider-oci'

resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformResource"></a>

```typescript
import { resourceSchedulerSchedule } from 'rhizo-co-terraform-provider-oci'

resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport"></a>

```typescript
import { resourceSchedulerSchedule } from 'rhizo-co-terraform-provider-oci'

resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ResourceSchedulerSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourceSchedulerSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourceSchedulerSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ResourceSchedulerSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFilters">resourceFilters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList">ResourceSchedulerScheduleResourceFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resources">resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList">ResourceSchedulerScheduleResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeLastRun">timeLastRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeNextRun">timeNextRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference">ResourceSchedulerScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetailsInput">recurrenceDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceTypeInput">recurrenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFiltersInput">resourceFiltersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourcesInput">resourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEndsInput">timeEndsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStartsInput">timeStartsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetails">recurrenceDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceType">recurrenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEnds">timeEnds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStarts">timeStarts</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceFilters`<sup>Required</sup> <a name="resourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFilters"></a>

```typescript
public readonly resourceFilters: ResourceSchedulerScheduleResourceFiltersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList">ResourceSchedulerScheduleResourceFiltersList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resources"></a>

```typescript
public readonly resources: ResourceSchedulerScheduleResourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList">ResourceSchedulerScheduleResourcesList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastRun`<sup>Required</sup> <a name="timeLastRun" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeLastRun"></a>

```typescript
public readonly timeLastRun: string;
```

- *Type:* string

---

##### `timeNextRun`<sup>Required</sup> <a name="timeNextRun" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeNextRun"></a>

```typescript
public readonly timeNextRun: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceSchedulerScheduleTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference">ResourceSchedulerScheduleTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `recurrenceDetailsInput`<sup>Optional</sup> <a name="recurrenceDetailsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetailsInput"></a>

```typescript
public readonly recurrenceDetailsInput: string;
```

- *Type:* string

---

##### `recurrenceTypeInput`<sup>Optional</sup> <a name="recurrenceTypeInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceTypeInput"></a>

```typescript
public readonly recurrenceTypeInput: string;
```

- *Type:* string

---

##### `resourceFiltersInput`<sup>Optional</sup> <a name="resourceFiltersInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFiltersInput"></a>

```typescript
public readonly resourceFiltersInput: IResolvable | ResourceSchedulerScheduleResourceFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: IResolvable | ResourceSchedulerScheduleResources[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>[]

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeEndsInput`<sup>Optional</sup> <a name="timeEndsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEndsInput"></a>

```typescript
public readonly timeEndsInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ResourceSchedulerScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>

---

##### `timeStartsInput`<sup>Optional</sup> <a name="timeStartsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStartsInput"></a>

```typescript
public readonly timeStartsInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `recurrenceDetails`<sup>Required</sup> <a name="recurrenceDetails" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetails"></a>

```typescript
public readonly recurrenceDetails: string;
```

- *Type:* string

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceType"></a>

```typescript
public readonly recurrenceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeEnds`<sup>Required</sup> <a name="timeEnds" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEnds"></a>

```typescript
public readonly timeEnds: string;
```

- *Type:* string

---

##### `timeStarts`<sup>Required</sup> <a name="timeStarts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStarts"></a>

```typescript
public readonly timeStarts: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceSchedulerScheduleConfig <a name="ResourceSchedulerScheduleConfig" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.Initializer"></a>

```typescript
import { resourceSchedulerSchedule } from 'rhizo-co-terraform-provider-oci'

const resourceSchedulerScheduleConfig: resourceSchedulerSchedule.ResourceSchedulerScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#action ResourceSchedulerSchedule#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#compartment_id ResourceSchedulerSchedule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceDetails">recurrenceDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_details ResourceSchedulerSchedule#recurrence_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceType">recurrenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_type ResourceSchedulerSchedule#recurrence_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#defined_tags ResourceSchedulerSchedule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#description ResourceSchedulerSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#display_name ResourceSchedulerSchedule#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#freeform_tags ResourceSchedulerSchedule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resourceFilters">resourceFilters</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>[]</code> | resource_filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resources">resources</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>[]</code> | resources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#state ResourceSchedulerSchedule#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeEnds">timeEnds</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_ends ResourceSchedulerSchedule#time_ends}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeStarts">timeStarts</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_starts ResourceSchedulerSchedule#time_starts}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#action ResourceSchedulerSchedule#action}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#compartment_id ResourceSchedulerSchedule#compartment_id}.

---

##### `recurrenceDetails`<sup>Required</sup> <a name="recurrenceDetails" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceDetails"></a>

```typescript
public readonly recurrenceDetails: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_details ResourceSchedulerSchedule#recurrence_details}.

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceType"></a>

```typescript
public readonly recurrenceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_type ResourceSchedulerSchedule#recurrence_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#defined_tags ResourceSchedulerSchedule#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#description ResourceSchedulerSchedule#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#display_name ResourceSchedulerSchedule#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#freeform_tags ResourceSchedulerSchedule#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceFilters`<sup>Optional</sup> <a name="resourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resourceFilters"></a>

```typescript
public readonly resourceFilters: IResolvable | ResourceSchedulerScheduleResourceFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>[]

resource_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#resource_filters ResourceSchedulerSchedule#resource_filters}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resources"></a>

```typescript
public readonly resources: IResolvable | ResourceSchedulerScheduleResources[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>[]

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#resources ResourceSchedulerSchedule#resources}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#state ResourceSchedulerSchedule#state}.

---

##### `timeEnds`<sup>Optional</sup> <a name="timeEnds" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeEnds"></a>

```typescript
public readonly timeEnds: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_ends ResourceSchedulerSchedule#time_ends}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceSchedulerScheduleTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#timeouts ResourceSchedulerSchedule#timeouts}

---

##### `timeStarts`<sup>Optional</sup> <a name="timeStarts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeStarts"></a>

```typescript
public readonly timeStarts: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_starts ResourceSchedulerSchedule#time_starts}.

---

### ResourceSchedulerScheduleResourceFilters <a name="ResourceSchedulerScheduleResourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.Initializer"></a>

```typescript
import { resourceSchedulerSchedule } from 'rhizo-co-terraform-provider-oci'

const resourceSchedulerScheduleResourceFilters: resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.attribute">attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#attribute ResourceSchedulerSchedule#attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.condition">condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#condition ResourceSchedulerSchedule#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.shouldIncludeChildCompartments">shouldIncludeChildCompartments</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#should_include_child_compartments ResourceSchedulerSchedule#should_include_child_compartments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.value">value</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>[]</code> | value block. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#attribute ResourceSchedulerSchedule#attribute}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#condition ResourceSchedulerSchedule#condition}.

---

##### `shouldIncludeChildCompartments`<sup>Optional</sup> <a name="shouldIncludeChildCompartments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.shouldIncludeChildCompartments"></a>

```typescript
public readonly shouldIncludeChildCompartments: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#should_include_child_compartments ResourceSchedulerSchedule#should_include_child_compartments}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.value"></a>

```typescript
public readonly value: IResolvable | ResourceSchedulerScheduleResourceFiltersValue[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>[]

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}

---

### ResourceSchedulerScheduleResourceFiltersValue <a name="ResourceSchedulerScheduleResourceFiltersValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.Initializer"></a>

```typescript
import { resourceSchedulerSchedule } from 'rhizo-co-terraform-provider-oci'

const resourceSchedulerScheduleResourceFiltersValue: resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#namespace ResourceSchedulerSchedule#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#tag_key ResourceSchedulerSchedule#tag_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#namespace ResourceSchedulerSchedule#namespace}.

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#tag_key ResourceSchedulerSchedule#tag_key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}.

---

### ResourceSchedulerScheduleResources <a name="ResourceSchedulerScheduleResources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.Initializer"></a>

```typescript
import { resourceSchedulerSchedule } from 'rhizo-co-terraform-provider-oci'

const resourceSchedulerScheduleResources: resourceSchedulerSchedule.ResourceSchedulerScheduleResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#metadata ResourceSchedulerSchedule#metadata}. |

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#metadata ResourceSchedulerSchedule#metadata}.

---

### ResourceSchedulerScheduleTimeouts <a name="ResourceSchedulerScheduleTimeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.Initializer"></a>

```typescript
import { resourceSchedulerSchedule } from 'rhizo-co-terraform-provider-oci'

const resourceSchedulerScheduleTimeouts: resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#create ResourceSchedulerSchedule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#delete ResourceSchedulerSchedule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#update ResourceSchedulerSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#create ResourceSchedulerSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#delete ResourceSchedulerSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#update ResourceSchedulerSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceSchedulerScheduleResourceFiltersList <a name="ResourceSchedulerScheduleResourceFiltersList" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer"></a>

```typescript
import { resourceSchedulerSchedule } from 'rhizo-co-terraform-provider-oci'

new resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.get"></a>

```typescript
public get(index: number): ResourceSchedulerScheduleResourceFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceSchedulerScheduleResourceFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>[]

---


### ResourceSchedulerScheduleResourceFiltersOutputReference <a name="ResourceSchedulerScheduleResourceFiltersOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer"></a>

```typescript
import { resourceSchedulerSchedule } from 'rhizo-co-terraform-provider-oci'

new resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetShouldIncludeChildCompartments">resetShouldIncludeChildCompartments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.putValue"></a>

```typescript
public putValue(value: IResolvable | ResourceSchedulerScheduleResourceFiltersValue[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.putValue.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>[]

---

##### `resetCondition` <a name="resetCondition" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetShouldIncludeChildCompartments` <a name="resetShouldIncludeChildCompartments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetShouldIncludeChildCompartments"></a>

```typescript
public resetShouldIncludeChildCompartments(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.value">value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList">ResourceSchedulerScheduleResourceFiltersValueList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartmentsInput">shouldIncludeChildCompartmentsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.valueInput">valueInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartments">shouldIncludeChildCompartments</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.value"></a>

```typescript
public readonly value: ResourceSchedulerScheduleResourceFiltersValueList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList">ResourceSchedulerScheduleResourceFiltersValueList</a>

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `shouldIncludeChildCompartmentsInput`<sup>Optional</sup> <a name="shouldIncludeChildCompartmentsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartmentsInput"></a>

```typescript
public readonly shouldIncludeChildCompartmentsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IResolvable | ResourceSchedulerScheduleResourceFiltersValue[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>[]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `shouldIncludeChildCompartments`<sup>Required</sup> <a name="shouldIncludeChildCompartments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartments"></a>

```typescript
public readonly shouldIncludeChildCompartments: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceSchedulerScheduleResourceFilters;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>

---


### ResourceSchedulerScheduleResourceFiltersValueList <a name="ResourceSchedulerScheduleResourceFiltersValueList" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer"></a>

```typescript
import { resourceSchedulerSchedule } from 'rhizo-co-terraform-provider-oci'

new resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.get"></a>

```typescript
public get(index: number): ResourceSchedulerScheduleResourceFiltersValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceSchedulerScheduleResourceFiltersValue[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>[]

---


### ResourceSchedulerScheduleResourceFiltersValueOutputReference <a name="ResourceSchedulerScheduleResourceFiltersValueOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer"></a>

```typescript
import { resourceSchedulerSchedule } from 'rhizo-co-terraform-provider-oci'

new resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTagKey` <a name="resetTagKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceSchedulerScheduleResourceFiltersValue;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>

---


### ResourceSchedulerScheduleResourcesList <a name="ResourceSchedulerScheduleResourcesList" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer"></a>

```typescript
import { resourceSchedulerSchedule } from 'rhizo-co-terraform-provider-oci'

new resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.get"></a>

```typescript
public get(index: number): ResourceSchedulerScheduleResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceSchedulerScheduleResources[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>[]

---


### ResourceSchedulerScheduleResourcesOutputReference <a name="ResourceSchedulerScheduleResourcesOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer"></a>

```typescript
import { resourceSchedulerSchedule } from 'rhizo-co-terraform-provider-oci'

new resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetadata` <a name="resetMetadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceSchedulerScheduleResources;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>

---


### ResourceSchedulerScheduleTimeoutsOutputReference <a name="ResourceSchedulerScheduleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer"></a>

```typescript
import { resourceSchedulerSchedule } from 'rhizo-co-terraform-provider-oci'

new resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceSchedulerScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>

---



