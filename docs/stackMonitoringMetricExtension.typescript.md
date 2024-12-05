# `stackMonitoringMetricExtension` Submodule <a name="`stackMonitoringMetricExtension` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMetricExtension <a name="StackMonitoringMetricExtension" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension oci_stack_monitoring_metric_extension}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMetricExtension.StackMonitoringMetricExtension(scope: Construct, id: string, config: StackMonitoringMetricExtensionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig">StackMonitoringMetricExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig">StackMonitoringMetricExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putMetricList">putMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties">putQueryProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetPublishTrigger">resetPublishTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetricList` <a name="putMetricList" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putMetricList"></a>

```typescript
public putMetricList(value: IResolvable | StackMonitoringMetricExtensionMetricListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putMetricList.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>[]

---

##### `putQueryProperties` <a name="putQueryProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties"></a>

```typescript
public putQueryProperties(value: StackMonitoringMetricExtensionQueryProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putTimeouts"></a>

```typescript
public putTimeouts(value: StackMonitoringMetricExtensionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPublishTrigger` <a name="resetPublishTrigger" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetPublishTrigger"></a>

```typescript
public resetPublishTrigger(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMetricExtension resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isConstruct"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMetricExtension.StackMonitoringMetricExtension.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformElement"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformResource"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StackMonitoringMetricExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackMonitoringMetricExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackMonitoringMetricExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMetricExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionMethod">collectionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.enabledOnResources">enabledOnResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList">StackMonitoringMetricExtensionEnabledOnResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.enabledOnResourcesCount">enabledOnResourcesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.metricList">metricList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList">StackMonitoringMetricExtensionMetricListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.queryProperties">queryProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference">StackMonitoringMetricExtensionQueryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceUri">resourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference">StackMonitoringMetricExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionRecurrencesInput">collectionRecurrencesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.metricListInput">metricListInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.publishTriggerInput">publishTriggerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.queryPropertiesInput">queryPropertiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionRecurrences">collectionRecurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.publishTrigger">publishTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `collectionMethod`<sup>Required</sup> <a name="collectionMethod" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionMethod"></a>

```typescript
public readonly collectionMethod: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `enabledOnResources`<sup>Required</sup> <a name="enabledOnResources" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.enabledOnResources"></a>

```typescript
public readonly enabledOnResources: StackMonitoringMetricExtensionEnabledOnResourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList">StackMonitoringMetricExtensionEnabledOnResourcesList</a>

---

##### `enabledOnResourcesCount`<sup>Required</sup> <a name="enabledOnResourcesCount" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.enabledOnResourcesCount"></a>

```typescript
public readonly enabledOnResourcesCount: number;
```

- *Type:* number

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: string;
```

- *Type:* string

---

##### `metricList`<sup>Required</sup> <a name="metricList" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.metricList"></a>

```typescript
public readonly metricList: StackMonitoringMetricExtensionMetricListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList">StackMonitoringMetricExtensionMetricListStructList</a>

---

##### `queryProperties`<sup>Required</sup> <a name="queryProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.queryProperties"></a>

```typescript
public readonly queryProperties: StackMonitoringMetricExtensionQueryPropertiesOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference">StackMonitoringMetricExtensionQueryPropertiesOutputReference</a>

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceUri"></a>

```typescript
public readonly resourceUri: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeouts"></a>

```typescript
public readonly timeouts: StackMonitoringMetricExtensionTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference">StackMonitoringMetricExtensionTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `collectionRecurrencesInput`<sup>Optional</sup> <a name="collectionRecurrencesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionRecurrencesInput"></a>

```typescript
public readonly collectionRecurrencesInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricListInput`<sup>Optional</sup> <a name="metricListInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.metricListInput"></a>

```typescript
public readonly metricListInput: IResolvable | StackMonitoringMetricExtensionMetricListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publishTriggerInput`<sup>Optional</sup> <a name="publishTriggerInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.publishTriggerInput"></a>

```typescript
public readonly publishTriggerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryPropertiesInput`<sup>Optional</sup> <a name="queryPropertiesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.queryPropertiesInput"></a>

```typescript
public readonly queryPropertiesInput: StackMonitoringMetricExtensionQueryProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StackMonitoringMetricExtensionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a>

---

##### `collectionRecurrences`<sup>Required</sup> <a name="collectionRecurrences" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionRecurrences"></a>

```typescript
public readonly collectionRecurrences: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publishTrigger`<sup>Required</sup> <a name="publishTrigger" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.publishTrigger"></a>

```typescript
public readonly publishTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMetricExtensionConfig <a name="StackMonitoringMetricExtensionConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMetricExtensionConfig: stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.collectionRecurrences">collectionRecurrences</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#collection_recurrences StackMonitoringMetricExtension#collection_recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#compartment_id StackMonitoringMetricExtension#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#display_name StackMonitoringMetricExtension#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.metricList">metricList</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>[]</code> | metric_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.queryProperties">queryProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a></code> | query_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#resource_type StackMonitoringMetricExtension#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#description StackMonitoringMetricExtension#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#id StackMonitoringMetricExtension#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.publishTrigger">publishTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#publish_trigger StackMonitoringMetricExtension#publish_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `collectionRecurrences`<sup>Required</sup> <a name="collectionRecurrences" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.collectionRecurrences"></a>

```typescript
public readonly collectionRecurrences: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#collection_recurrences StackMonitoringMetricExtension#collection_recurrences}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#compartment_id StackMonitoringMetricExtension#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#display_name StackMonitoringMetricExtension#display_name}.

---

##### `metricList`<sup>Required</sup> <a name="metricList" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.metricList"></a>

```typescript
public readonly metricList: IResolvable | StackMonitoringMetricExtensionMetricListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>[]

metric_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#metric_list StackMonitoringMetricExtension#metric_list}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}.

---

##### `queryProperties`<sup>Required</sup> <a name="queryProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.queryProperties"></a>

```typescript
public readonly queryProperties: StackMonitoringMetricExtensionQueryProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a>

query_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#query_properties StackMonitoringMetricExtension#query_properties}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#resource_type StackMonitoringMetricExtension#resource_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#description StackMonitoringMetricExtension#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#id StackMonitoringMetricExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publishTrigger`<sup>Optional</sup> <a name="publishTrigger" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.publishTrigger"></a>

```typescript
public readonly publishTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#publish_trigger StackMonitoringMetricExtension#publish_trigger}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StackMonitoringMetricExtensionTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#timeouts StackMonitoringMetricExtension#timeouts}

---

### StackMonitoringMetricExtensionEnabledOnResources <a name="StackMonitoringMetricExtensionEnabledOnResources" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResources.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMetricExtensionEnabledOnResources: stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResources = { ... }
```


### StackMonitoringMetricExtensionMetricListStruct <a name="StackMonitoringMetricExtensionMetricListStruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMetricExtensionMetricListStruct: stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.dataType">dataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#data_type StackMonitoringMetricExtension#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.computeExpression">computeExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#compute_expression StackMonitoringMetricExtension#compute_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#display_name StackMonitoringMetricExtension#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.isDimension">isDimension</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_dimension StackMonitoringMetricExtension#is_dimension}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.isHidden">isHidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_hidden StackMonitoringMetricExtension#is_hidden}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.metricCategory">metricCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#metric_category StackMonitoringMetricExtension#metric_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#unit StackMonitoringMetricExtension#unit}. |

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#data_type StackMonitoringMetricExtension#data_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}.

---

##### `computeExpression`<sup>Optional</sup> <a name="computeExpression" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.computeExpression"></a>

```typescript
public readonly computeExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#compute_expression StackMonitoringMetricExtension#compute_expression}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#display_name StackMonitoringMetricExtension#display_name}.

---

##### `isDimension`<sup>Optional</sup> <a name="isDimension" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.isDimension"></a>

```typescript
public readonly isDimension: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_dimension StackMonitoringMetricExtension#is_dimension}.

---

##### `isHidden`<sup>Optional</sup> <a name="isHidden" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.isHidden"></a>

```typescript
public readonly isHidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_hidden StackMonitoringMetricExtension#is_hidden}.

---

##### `metricCategory`<sup>Optional</sup> <a name="metricCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.metricCategory"></a>

```typescript
public readonly metricCategory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#metric_category StackMonitoringMetricExtension#metric_category}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#unit StackMonitoringMetricExtension#unit}.

---

### StackMonitoringMetricExtensionQueryProperties <a name="StackMonitoringMetricExtensionQueryProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMetricExtensionQueryProperties: stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.collectionMethod">collectionMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#collection_method StackMonitoringMetricExtension#collection_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.arguments">arguments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#arguments StackMonitoringMetricExtension#arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.autoRowPrefix">autoRowPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#auto_row_prefix StackMonitoringMetricExtension#auto_row_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.command">command</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#command StackMonitoringMetricExtension#command}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.delimiter">delimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#delimiter StackMonitoringMetricExtension#delimiter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.identityMetric">identityMetric</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#identity_metric StackMonitoringMetricExtension#identity_metric}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.inParamDetails">inParamDetails</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>[]</code> | in_param_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.isMetricServiceEnabled">isMetricServiceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_metric_service_enabled StackMonitoringMetricExtension#is_metric_service_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.jmxAttributes">jmxAttributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#jmx_attributes StackMonitoringMetricExtension#jmx_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.managedBeanQuery">managedBeanQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#managed_bean_query StackMonitoringMetricExtension#managed_bean_query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.outParamDetails">outParamDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a></code> | out_param_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.scriptDetails">scriptDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a></code> | script_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.sqlDetails">sqlDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a></code> | sql_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.sqlType">sqlType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#sql_type StackMonitoringMetricExtension#sql_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.startsWith">startsWith</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#starts_with StackMonitoringMetricExtension#starts_with}. |

---

##### `collectionMethod`<sup>Required</sup> <a name="collectionMethod" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.collectionMethod"></a>

```typescript
public readonly collectionMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#collection_method StackMonitoringMetricExtension#collection_method}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.arguments"></a>

```typescript
public readonly arguments: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#arguments StackMonitoringMetricExtension#arguments}.

---

##### `autoRowPrefix`<sup>Optional</sup> <a name="autoRowPrefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.autoRowPrefix"></a>

```typescript
public readonly autoRowPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#auto_row_prefix StackMonitoringMetricExtension#auto_row_prefix}.

---

##### `command`<sup>Optional</sup> <a name="command" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#command StackMonitoringMetricExtension#command}.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#delimiter StackMonitoringMetricExtension#delimiter}.

---

##### `identityMetric`<sup>Optional</sup> <a name="identityMetric" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.identityMetric"></a>

```typescript
public readonly identityMetric: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#identity_metric StackMonitoringMetricExtension#identity_metric}.

---

##### `inParamDetails`<sup>Optional</sup> <a name="inParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.inParamDetails"></a>

```typescript
public readonly inParamDetails: IResolvable | StackMonitoringMetricExtensionQueryPropertiesInParamDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>[]

in_param_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#in_param_details StackMonitoringMetricExtension#in_param_details}

---

##### `isMetricServiceEnabled`<sup>Optional</sup> <a name="isMetricServiceEnabled" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.isMetricServiceEnabled"></a>

```typescript
public readonly isMetricServiceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_metric_service_enabled StackMonitoringMetricExtension#is_metric_service_enabled}.

---

##### `jmxAttributes`<sup>Optional</sup> <a name="jmxAttributes" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.jmxAttributes"></a>

```typescript
public readonly jmxAttributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#jmx_attributes StackMonitoringMetricExtension#jmx_attributes}.

---

##### `managedBeanQuery`<sup>Optional</sup> <a name="managedBeanQuery" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.managedBeanQuery"></a>

```typescript
public readonly managedBeanQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#managed_bean_query StackMonitoringMetricExtension#managed_bean_query}.

---

##### `outParamDetails`<sup>Optional</sup> <a name="outParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.outParamDetails"></a>

```typescript
public readonly outParamDetails: StackMonitoringMetricExtensionQueryPropertiesOutParamDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a>

out_param_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_details StackMonitoringMetricExtension#out_param_details}

---

##### `scriptDetails`<sup>Optional</sup> <a name="scriptDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.scriptDetails"></a>

```typescript
public readonly scriptDetails: StackMonitoringMetricExtensionQueryPropertiesScriptDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a>

script_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#script_details StackMonitoringMetricExtension#script_details}

---

##### `sqlDetails`<sup>Optional</sup> <a name="sqlDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.sqlDetails"></a>

```typescript
public readonly sqlDetails: StackMonitoringMetricExtensionQueryPropertiesSqlDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a>

sql_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#sql_details StackMonitoringMetricExtension#sql_details}

---

##### `sqlType`<sup>Optional</sup> <a name="sqlType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.sqlType"></a>

```typescript
public readonly sqlType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#sql_type StackMonitoringMetricExtension#sql_type}.

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#starts_with StackMonitoringMetricExtension#starts_with}.

---

### StackMonitoringMetricExtensionQueryPropertiesInParamDetails <a name="StackMonitoringMetricExtensionQueryPropertiesInParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMetricExtensionQueryPropertiesInParamDetails: stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails.property.inParamPosition">inParamPosition</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#in_param_position StackMonitoringMetricExtension#in_param_position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails.property.inParamValue">inParamValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#in_param_value StackMonitoringMetricExtension#in_param_value}. |

---

##### `inParamPosition`<sup>Required</sup> <a name="inParamPosition" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails.property.inParamPosition"></a>

```typescript
public readonly inParamPosition: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#in_param_position StackMonitoringMetricExtension#in_param_position}.

---

##### `inParamValue`<sup>Required</sup> <a name="inParamValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails.property.inParamValue"></a>

```typescript
public readonly inParamValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#in_param_value StackMonitoringMetricExtension#in_param_value}.

---

### StackMonitoringMetricExtensionQueryPropertiesOutParamDetails <a name="StackMonitoringMetricExtensionQueryPropertiesOutParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMetricExtensionQueryPropertiesOutParamDetails: stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails.property.outParamPosition">outParamPosition</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_position StackMonitoringMetricExtension#out_param_position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails.property.outParamType">outParamType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_type StackMonitoringMetricExtension#out_param_type}. |

---

##### `outParamPosition`<sup>Required</sup> <a name="outParamPosition" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails.property.outParamPosition"></a>

```typescript
public readonly outParamPosition: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_position StackMonitoringMetricExtension#out_param_position}.

---

##### `outParamType`<sup>Required</sup> <a name="outParamType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails.property.outParamType"></a>

```typescript
public readonly outParamType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_type StackMonitoringMetricExtension#out_param_type}.

---

### StackMonitoringMetricExtensionQueryPropertiesScriptDetails <a name="StackMonitoringMetricExtensionQueryPropertiesScriptDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMetricExtensionQueryPropertiesScriptDetails: stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#content StackMonitoringMetricExtension#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}. |

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#content StackMonitoringMetricExtension#content}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}.

---

### StackMonitoringMetricExtensionQueryPropertiesSqlDetails <a name="StackMonitoringMetricExtensionQueryPropertiesSqlDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMetricExtensionQueryPropertiesSqlDetails: stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#content StackMonitoringMetricExtension#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails.property.scriptFileName">scriptFileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#script_file_name StackMonitoringMetricExtension#script_file_name}. |

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#content StackMonitoringMetricExtension#content}.

---

##### `scriptFileName`<sup>Optional</sup> <a name="scriptFileName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails.property.scriptFileName"></a>

```typescript
public readonly scriptFileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#script_file_name StackMonitoringMetricExtension#script_file_name}.

---

### StackMonitoringMetricExtensionTimeouts <a name="StackMonitoringMetricExtensionTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMetricExtensionTimeouts: stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#create StackMonitoringMetricExtension#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#delete StackMonitoringMetricExtension#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#update StackMonitoringMetricExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#create StackMonitoringMetricExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#delete StackMonitoringMetricExtension#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#update StackMonitoringMetricExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMetricExtensionEnabledOnResourcesList <a name="StackMonitoringMetricExtensionEnabledOnResourcesList" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.get"></a>

```typescript
public get(index: number): StackMonitoringMetricExtensionEnabledOnResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StackMonitoringMetricExtensionEnabledOnResourcesOutputReference <a name="StackMonitoringMetricExtensionEnabledOnResourcesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResources">StackMonitoringMetricExtensionEnabledOnResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMetricExtensionEnabledOnResources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResources">StackMonitoringMetricExtensionEnabledOnResources</a>

---


### StackMonitoringMetricExtensionMetricListStructList <a name="StackMonitoringMetricExtensionMetricListStructList" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.get"></a>

```typescript
public get(index: number): StackMonitoringMetricExtensionMetricListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMetricExtensionMetricListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>[]

---


### StackMonitoringMetricExtensionMetricListStructOutputReference <a name="StackMonitoringMetricExtensionMetricListStructOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetComputeExpression">resetComputeExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetIsDimension">resetIsDimension</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetIsHidden">resetIsHidden</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetMetricCategory">resetMetricCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeExpression` <a name="resetComputeExpression" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetComputeExpression"></a>

```typescript
public resetComputeExpression(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetIsDimension` <a name="resetIsDimension" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetIsDimension"></a>

```typescript
public resetIsDimension(): void
```

##### `resetIsHidden` <a name="resetIsHidden" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetIsHidden"></a>

```typescript
public resetIsHidden(): void
```

##### `resetMetricCategory` <a name="resetMetricCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetMetricCategory"></a>

```typescript
public resetMetricCategory(): void
```

##### `resetUnit` <a name="resetUnit" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpressionInput">computeExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimensionInput">isDimensionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isHiddenInput">isHiddenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategoryInput">metricCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpression">computeExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimension">isDimension</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isHidden">isHidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategory">metricCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeExpressionInput`<sup>Optional</sup> <a name="computeExpressionInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpressionInput"></a>

```typescript
public readonly computeExpressionInput: string;
```

- *Type:* string

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `isDimensionInput`<sup>Optional</sup> <a name="isDimensionInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimensionInput"></a>

```typescript
public readonly isDimensionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHiddenInput`<sup>Optional</sup> <a name="isHiddenInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isHiddenInput"></a>

```typescript
public readonly isHiddenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricCategoryInput`<sup>Optional</sup> <a name="metricCategoryInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategoryInput"></a>

```typescript
public readonly metricCategoryInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `computeExpression`<sup>Required</sup> <a name="computeExpression" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpression"></a>

```typescript
public readonly computeExpression: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `isDimension`<sup>Required</sup> <a name="isDimension" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimension"></a>

```typescript
public readonly isDimension: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHidden`<sup>Required</sup> <a name="isHidden" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isHidden"></a>

```typescript
public readonly isHidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricCategory`<sup>Required</sup> <a name="metricCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategory"></a>

```typescript
public readonly metricCategory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMetricExtensionMetricListStruct;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct">StackMonitoringMetricExtensionMetricListStruct</a>

---


### StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList <a name="StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get"></a>

```typescript
public get(index: number): StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMetricExtensionQueryPropertiesInParamDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>[]

---


### StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference <a name="StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPositionInput">inParamPositionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValueInput">inParamValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPosition">inParamPosition</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValue">inParamValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inParamPositionInput`<sup>Optional</sup> <a name="inParamPositionInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPositionInput"></a>

```typescript
public readonly inParamPositionInput: number;
```

- *Type:* number

---

##### `inParamValueInput`<sup>Optional</sup> <a name="inParamValueInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValueInput"></a>

```typescript
public readonly inParamValueInput: string;
```

- *Type:* string

---

##### `inParamPosition`<sup>Required</sup> <a name="inParamPosition" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPosition"></a>

```typescript
public readonly inParamPosition: number;
```

- *Type:* number

---

##### `inParamValue`<sup>Required</sup> <a name="inParamValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValue"></a>

```typescript
public readonly inParamValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMetricExtensionQueryPropertiesInParamDetails;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>

---


### StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference <a name="StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPositionInput">outParamPositionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamTypeInput">outParamTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition">outParamPosition</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamType">outParamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outParamPositionInput`<sup>Optional</sup> <a name="outParamPositionInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPositionInput"></a>

```typescript
public readonly outParamPositionInput: number;
```

- *Type:* number

---

##### `outParamTypeInput`<sup>Optional</sup> <a name="outParamTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamTypeInput"></a>

```typescript
public readonly outParamTypeInput: string;
```

- *Type:* string

---

##### `outParamPosition`<sup>Required</sup> <a name="outParamPosition" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition"></a>

```typescript
public readonly outParamPosition: number;
```

- *Type:* number

---

##### `outParamType`<sup>Required</sup> <a name="outParamType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamType"></a>

```typescript
public readonly outParamType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMetricExtensionQueryPropertiesOutParamDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a>

---


### StackMonitoringMetricExtensionQueryPropertiesOutputReference <a name="StackMonitoringMetricExtensionQueryPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putInParamDetails">putInParamDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putOutParamDetails">putOutParamDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putScriptDetails">putScriptDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putSqlDetails">putSqlDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetAutoRowPrefix">resetAutoRowPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetIdentityMetric">resetIdentityMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetInParamDetails">resetInParamDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetIsMetricServiceEnabled">resetIsMetricServiceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetJmxAttributes">resetJmxAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetManagedBeanQuery">resetManagedBeanQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetOutParamDetails">resetOutParamDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetScriptDetails">resetScriptDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetSqlDetails">resetSqlDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetSqlType">resetSqlType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetStartsWith">resetStartsWith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInParamDetails` <a name="putInParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putInParamDetails"></a>

```typescript
public putInParamDetails(value: IResolvable | StackMonitoringMetricExtensionQueryPropertiesInParamDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putInParamDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>[]

---

##### `putOutParamDetails` <a name="putOutParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putOutParamDetails"></a>

```typescript
public putOutParamDetails(value: StackMonitoringMetricExtensionQueryPropertiesOutParamDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putOutParamDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a>

---

##### `putScriptDetails` <a name="putScriptDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putScriptDetails"></a>

```typescript
public putScriptDetails(value: StackMonitoringMetricExtensionQueryPropertiesScriptDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putScriptDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a>

---

##### `putSqlDetails` <a name="putSqlDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putSqlDetails"></a>

```typescript
public putSqlDetails(value: StackMonitoringMetricExtensionQueryPropertiesSqlDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putSqlDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a>

---

##### `resetArguments` <a name="resetArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetArguments"></a>

```typescript
public resetArguments(): void
```

##### `resetAutoRowPrefix` <a name="resetAutoRowPrefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetAutoRowPrefix"></a>

```typescript
public resetAutoRowPrefix(): void
```

##### `resetCommand` <a name="resetCommand" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetDelimiter` <a name="resetDelimiter" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetDelimiter"></a>

```typescript
public resetDelimiter(): void
```

##### `resetIdentityMetric` <a name="resetIdentityMetric" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetIdentityMetric"></a>

```typescript
public resetIdentityMetric(): void
```

##### `resetInParamDetails` <a name="resetInParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetInParamDetails"></a>

```typescript
public resetInParamDetails(): void
```

##### `resetIsMetricServiceEnabled` <a name="resetIsMetricServiceEnabled" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetIsMetricServiceEnabled"></a>

```typescript
public resetIsMetricServiceEnabled(): void
```

##### `resetJmxAttributes` <a name="resetJmxAttributes" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetJmxAttributes"></a>

```typescript
public resetJmxAttributes(): void
```

##### `resetManagedBeanQuery` <a name="resetManagedBeanQuery" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetManagedBeanQuery"></a>

```typescript
public resetManagedBeanQuery(): void
```

##### `resetOutParamDetails` <a name="resetOutParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetOutParamDetails"></a>

```typescript
public resetOutParamDetails(): void
```

##### `resetScriptDetails` <a name="resetScriptDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetScriptDetails"></a>

```typescript
public resetScriptDetails(): void
```

##### `resetSqlDetails` <a name="resetSqlDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetSqlDetails"></a>

```typescript
public resetSqlDetails(): void
```

##### `resetSqlType` <a name="resetSqlType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetSqlType"></a>

```typescript
public resetSqlType(): void
```

##### `resetStartsWith` <a name="resetStartsWith" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetStartsWith"></a>

```typescript
public resetStartsWith(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetails">inParamDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList">StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetails">outParamDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetails">scriptDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetails">sqlDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.argumentsInput">argumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefixInput">autoRowPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethodInput">collectionMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.commandInput">commandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetricInput">identityMetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetailsInput">inParamDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabledInput">isMetricServiceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributesInput">jmxAttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQueryInput">managedBeanQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetailsInput">outParamDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetailsInput">scriptDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetailsInput">sqlDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlTypeInput">sqlTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWithInput">startsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.arguments">arguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefix">autoRowPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethod">collectionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetric">identityMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabled">isMetricServiceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributes">jmxAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQuery">managedBeanQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlType">sqlType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWith">startsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inParamDetails`<sup>Required</sup> <a name="inParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetails"></a>

```typescript
public readonly inParamDetails: StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList">StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList</a>

---

##### `outParamDetails`<sup>Required</sup> <a name="outParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetails"></a>

```typescript
public readonly outParamDetails: StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference</a>

---

##### `scriptDetails`<sup>Required</sup> <a name="scriptDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetails"></a>

```typescript
public readonly scriptDetails: StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference</a>

---

##### `sqlDetails`<sup>Required</sup> <a name="sqlDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetails"></a>

```typescript
public readonly sqlDetails: StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.argumentsInput"></a>

```typescript
public readonly argumentsInput: string;
```

- *Type:* string

---

##### `autoRowPrefixInput`<sup>Optional</sup> <a name="autoRowPrefixInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefixInput"></a>

```typescript
public readonly autoRowPrefixInput: string;
```

- *Type:* string

---

##### `collectionMethodInput`<sup>Optional</sup> <a name="collectionMethodInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethodInput"></a>

```typescript
public readonly collectionMethodInput: string;
```

- *Type:* string

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string;
```

- *Type:* string

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiterInput"></a>

```typescript
public readonly delimiterInput: string;
```

- *Type:* string

---

##### `identityMetricInput`<sup>Optional</sup> <a name="identityMetricInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetricInput"></a>

```typescript
public readonly identityMetricInput: string;
```

- *Type:* string

---

##### `inParamDetailsInput`<sup>Optional</sup> <a name="inParamDetailsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetailsInput"></a>

```typescript
public readonly inParamDetailsInput: IResolvable | StackMonitoringMetricExtensionQueryPropertiesInParamDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails">StackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>[]

---

##### `isMetricServiceEnabledInput`<sup>Optional</sup> <a name="isMetricServiceEnabledInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabledInput"></a>

```typescript
public readonly isMetricServiceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jmxAttributesInput`<sup>Optional</sup> <a name="jmxAttributesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributesInput"></a>

```typescript
public readonly jmxAttributesInput: string;
```

- *Type:* string

---

##### `managedBeanQueryInput`<sup>Optional</sup> <a name="managedBeanQueryInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQueryInput"></a>

```typescript
public readonly managedBeanQueryInput: string;
```

- *Type:* string

---

##### `outParamDetailsInput`<sup>Optional</sup> <a name="outParamDetailsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetailsInput"></a>

```typescript
public readonly outParamDetailsInput: StackMonitoringMetricExtensionQueryPropertiesOutParamDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a>

---

##### `scriptDetailsInput`<sup>Optional</sup> <a name="scriptDetailsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetailsInput"></a>

```typescript
public readonly scriptDetailsInput: StackMonitoringMetricExtensionQueryPropertiesScriptDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a>

---

##### `sqlDetailsInput`<sup>Optional</sup> <a name="sqlDetailsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetailsInput"></a>

```typescript
public readonly sqlDetailsInput: StackMonitoringMetricExtensionQueryPropertiesSqlDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a>

---

##### `sqlTypeInput`<sup>Optional</sup> <a name="sqlTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlTypeInput"></a>

```typescript
public readonly sqlTypeInput: string;
```

- *Type:* string

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWithInput"></a>

```typescript
public readonly startsWithInput: string;
```

- *Type:* string

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.arguments"></a>

```typescript
public readonly arguments: string;
```

- *Type:* string

---

##### `autoRowPrefix`<sup>Required</sup> <a name="autoRowPrefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefix"></a>

```typescript
public readonly autoRowPrefix: string;
```

- *Type:* string

---

##### `collectionMethod`<sup>Required</sup> <a name="collectionMethod" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethod"></a>

```typescript
public readonly collectionMethod: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `identityMetric`<sup>Required</sup> <a name="identityMetric" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetric"></a>

```typescript
public readonly identityMetric: string;
```

- *Type:* string

---

##### `isMetricServiceEnabled`<sup>Required</sup> <a name="isMetricServiceEnabled" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabled"></a>

```typescript
public readonly isMetricServiceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jmxAttributes`<sup>Required</sup> <a name="jmxAttributes" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributes"></a>

```typescript
public readonly jmxAttributes: string;
```

- *Type:* string

---

##### `managedBeanQuery`<sup>Required</sup> <a name="managedBeanQuery" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQuery"></a>

```typescript
public readonly managedBeanQuery: string;
```

- *Type:* string

---

##### `sqlType`<sup>Required</sup> <a name="sqlType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlType"></a>

```typescript
public readonly sqlType: string;
```

- *Type:* string

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMetricExtensionQueryProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a>

---


### StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference <a name="StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMetricExtensionQueryPropertiesScriptDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a>

---


### StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference <a name="StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resetScriptFileName">resetScriptFileName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScriptFileName` <a name="resetScriptFileName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resetScriptFileName"></a>

```typescript
public resetScriptFileName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileNameInput">scriptFileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileName">scriptFileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `scriptFileNameInput`<sup>Optional</sup> <a name="scriptFileNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileNameInput"></a>

```typescript
public readonly scriptFileNameInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `scriptFileName`<sup>Required</sup> <a name="scriptFileName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileName"></a>

```typescript
public readonly scriptFileName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMetricExtensionQueryPropertiesSqlDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a>

---


### StackMonitoringMetricExtensionTimeoutsOutputReference <a name="StackMonitoringMetricExtensionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMetricExtensionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a>

---



