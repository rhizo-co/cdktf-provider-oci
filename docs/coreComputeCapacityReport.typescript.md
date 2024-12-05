# `coreComputeCapacityReport` Submodule <a name="`coreComputeCapacityReport` Submodule" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreComputeCapacityReport <a name="CoreComputeCapacityReport" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report oci_core_compute_capacity_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.Initializer"></a>

```typescript
import { coreComputeCapacityReport } from 'rhizo-co-terraform-provider-oci'

new coreComputeCapacityReport.CoreComputeCapacityReport(scope: Construct, id: string, config: CoreComputeCapacityReportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig">CoreComputeCapacityReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig">CoreComputeCapacityReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.putShapeAvailabilities">putShapeAvailabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putShapeAvailabilities` <a name="putShapeAvailabilities" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.putShapeAvailabilities"></a>

```typescript
public putShapeAvailabilities(value: IResolvable | CoreComputeCapacityReportShapeAvailabilities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.putShapeAvailabilities.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities">CoreComputeCapacityReportShapeAvailabilities</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreComputeCapacityReportTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeouts">CoreComputeCapacityReportTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreComputeCapacityReport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.isConstruct"></a>

```typescript
import { coreComputeCapacityReport } from 'rhizo-co-terraform-provider-oci'

coreComputeCapacityReport.CoreComputeCapacityReport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.isTerraformElement"></a>

```typescript
import { coreComputeCapacityReport } from 'rhizo-co-terraform-provider-oci'

coreComputeCapacityReport.CoreComputeCapacityReport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.isTerraformResource"></a>

```typescript
import { coreComputeCapacityReport } from 'rhizo-co-terraform-provider-oci'

coreComputeCapacityReport.CoreComputeCapacityReport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.generateConfigForImport"></a>

```typescript
import { coreComputeCapacityReport } from 'rhizo-co-terraform-provider-oci'

coreComputeCapacityReport.CoreComputeCapacityReport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreComputeCapacityReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreComputeCapacityReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreComputeCapacityReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreComputeCapacityReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.shapeAvailabilities">shapeAvailabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList">CoreComputeCapacityReportShapeAvailabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference">CoreComputeCapacityReportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.shapeAvailabilitiesInput">shapeAvailabilitiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities">CoreComputeCapacityReportShapeAvailabilities</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeouts">CoreComputeCapacityReportTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `shapeAvailabilities`<sup>Required</sup> <a name="shapeAvailabilities" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.shapeAvailabilities"></a>

```typescript
public readonly shapeAvailabilities: CoreComputeCapacityReportShapeAvailabilitiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList">CoreComputeCapacityReportShapeAvailabilitiesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.timeouts"></a>

```typescript
public readonly timeouts: CoreComputeCapacityReportTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference">CoreComputeCapacityReportTimeoutsOutputReference</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `shapeAvailabilitiesInput`<sup>Optional</sup> <a name="shapeAvailabilitiesInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.shapeAvailabilitiesInput"></a>

```typescript
public readonly shapeAvailabilitiesInput: IResolvable | CoreComputeCapacityReportShapeAvailabilities[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities">CoreComputeCapacityReportShapeAvailabilities</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreComputeCapacityReportTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeouts">CoreComputeCapacityReportTimeouts</a>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreComputeCapacityReportConfig <a name="CoreComputeCapacityReportConfig" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.Initializer"></a>

```typescript
import { coreComputeCapacityReport } from 'rhizo-co-terraform-provider-oci'

const coreComputeCapacityReportConfig: coreComputeCapacityReport.CoreComputeCapacityReportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#availability_domain CoreComputeCapacityReport#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#compartment_id CoreComputeCapacityReport#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.shapeAvailabilities">shapeAvailabilities</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities">CoreComputeCapacityReportShapeAvailabilities</a>[]</code> | shape_availabilities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#id CoreComputeCapacityReport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeouts">CoreComputeCapacityReportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#availability_domain CoreComputeCapacityReport#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#compartment_id CoreComputeCapacityReport#compartment_id}.

---

##### `shapeAvailabilities`<sup>Required</sup> <a name="shapeAvailabilities" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.shapeAvailabilities"></a>

```typescript
public readonly shapeAvailabilities: IResolvable | CoreComputeCapacityReportShapeAvailabilities[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities">CoreComputeCapacityReportShapeAvailabilities</a>[]

shape_availabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#shape_availabilities CoreComputeCapacityReport#shape_availabilities}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#id CoreComputeCapacityReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreComputeCapacityReportTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeouts">CoreComputeCapacityReportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#timeouts CoreComputeCapacityReport#timeouts}

---

### CoreComputeCapacityReportShapeAvailabilities <a name="CoreComputeCapacityReportShapeAvailabilities" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities.Initializer"></a>

```typescript
import { coreComputeCapacityReport } from 'rhizo-co-terraform-provider-oci'

const coreComputeCapacityReportShapeAvailabilities: coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities.property.instanceShape">instanceShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#instance_shape CoreComputeCapacityReport#instance_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities.property.faultDomain">faultDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#fault_domain CoreComputeCapacityReport#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities.property.instanceShapeConfig">instanceShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig">CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig</a></code> | instance_shape_config block. |

---

##### `instanceShape`<sup>Required</sup> <a name="instanceShape" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities.property.instanceShape"></a>

```typescript
public readonly instanceShape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#instance_shape CoreComputeCapacityReport#instance_shape}.

---

##### `faultDomain`<sup>Optional</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#fault_domain CoreComputeCapacityReport#fault_domain}.

---

##### `instanceShapeConfig`<sup>Optional</sup> <a name="instanceShapeConfig" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities.property.instanceShapeConfig"></a>

```typescript
public readonly instanceShapeConfig: CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig">CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig</a>

instance_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#instance_shape_config CoreComputeCapacityReport#instance_shape_config}

---

### CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig <a name="CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig.Initializer"></a>

```typescript
import { coreComputeCapacityReport } from 'rhizo-co-terraform-provider-oci'

const coreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig: coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#memory_in_gbs CoreComputeCapacityReport#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig.property.nvmes">nvmes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#nvmes CoreComputeCapacityReport#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig.property.ocpus">ocpus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#ocpus CoreComputeCapacityReport#ocpus}. |

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#memory_in_gbs CoreComputeCapacityReport#memory_in_gbs}.

---

##### `nvmes`<sup>Optional</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig.property.nvmes"></a>

```typescript
public readonly nvmes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#nvmes CoreComputeCapacityReport#nvmes}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#ocpus CoreComputeCapacityReport#ocpus}.

---

### CoreComputeCapacityReportTimeouts <a name="CoreComputeCapacityReportTimeouts" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeouts.Initializer"></a>

```typescript
import { coreComputeCapacityReport } from 'rhizo-co-terraform-provider-oci'

const coreComputeCapacityReportTimeouts: coreComputeCapacityReport.CoreComputeCapacityReportTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#create CoreComputeCapacityReport#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#delete CoreComputeCapacityReport#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#update CoreComputeCapacityReport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#create CoreComputeCapacityReport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#delete CoreComputeCapacityReport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_report#update CoreComputeCapacityReport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference <a name="CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.Initializer"></a>

```typescript
import { coreComputeCapacityReport } from 'rhizo-co-terraform-provider-oci'

new coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.resetNvmes">resetNvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.resetMemoryInGbs"></a>

```typescript
public resetMemoryInGbs(): void
```

##### `resetNvmes` <a name="resetNvmes" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.resetNvmes"></a>

```typescript
public resetNvmes(): void
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.resetOcpus"></a>

```typescript
public resetOcpus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.nvmesInput">nvmesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig">CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.memoryInGbsInput"></a>

```typescript
public readonly memoryInGbsInput: number;
```

- *Type:* number

---

##### `nvmesInput`<sup>Optional</sup> <a name="nvmesInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.nvmesInput"></a>

```typescript
public readonly nvmesInput: number;
```

- *Type:* number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.ocpusInput"></a>

```typescript
public readonly ocpusInput: number;
```

- *Type:* number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.nvmes"></a>

```typescript
public readonly nvmes: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig">CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig</a>

---


### CoreComputeCapacityReportShapeAvailabilitiesList <a name="CoreComputeCapacityReportShapeAvailabilitiesList" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.Initializer"></a>

```typescript
import { coreComputeCapacityReport } from 'rhizo-co-terraform-provider-oci'

new coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.get"></a>

```typescript
public get(index: number): CoreComputeCapacityReportShapeAvailabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities">CoreComputeCapacityReportShapeAvailabilities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreComputeCapacityReportShapeAvailabilities[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities">CoreComputeCapacityReportShapeAvailabilities</a>[]

---


### CoreComputeCapacityReportShapeAvailabilitiesOutputReference <a name="CoreComputeCapacityReportShapeAvailabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.Initializer"></a>

```typescript
import { coreComputeCapacityReport } from 'rhizo-co-terraform-provider-oci'

new coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.putInstanceShapeConfig">putInstanceShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.resetFaultDomain">resetFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.resetInstanceShapeConfig">resetInstanceShapeConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstanceShapeConfig` <a name="putInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.putInstanceShapeConfig"></a>

```typescript
public putInstanceShapeConfig(value: CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.putInstanceShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig">CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig</a>

---

##### `resetFaultDomain` <a name="resetFaultDomain" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.resetFaultDomain"></a>

```typescript
public resetFaultDomain(): void
```

##### `resetInstanceShapeConfig` <a name="resetInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.resetInstanceShapeConfig"></a>

```typescript
public resetInstanceShapeConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.availabilityStatus">availabilityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.availableCount">availableCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.instanceShapeConfig">instanceShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference">CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.faultDomainInput">faultDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.instanceShapeConfigInput">instanceShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig">CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.instanceShapeInput">instanceShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.instanceShape">instanceShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities">CoreComputeCapacityReportShapeAvailabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.availabilityStatus"></a>

```typescript
public readonly availabilityStatus: string;
```

- *Type:* string

---

##### `availableCount`<sup>Required</sup> <a name="availableCount" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.availableCount"></a>

```typescript
public readonly availableCount: string;
```

- *Type:* string

---

##### `instanceShapeConfig`<sup>Required</sup> <a name="instanceShapeConfig" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.instanceShapeConfig"></a>

```typescript
public readonly instanceShapeConfig: CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference">CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfigOutputReference</a>

---

##### `faultDomainInput`<sup>Optional</sup> <a name="faultDomainInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.faultDomainInput"></a>

```typescript
public readonly faultDomainInput: string;
```

- *Type:* string

---

##### `instanceShapeConfigInput`<sup>Optional</sup> <a name="instanceShapeConfigInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.instanceShapeConfigInput"></a>

```typescript
public readonly instanceShapeConfigInput: CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig">CoreComputeCapacityReportShapeAvailabilitiesInstanceShapeConfig</a>

---

##### `instanceShapeInput`<sup>Optional</sup> <a name="instanceShapeInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.instanceShapeInput"></a>

```typescript
public readonly instanceShapeInput: string;
```

- *Type:* string

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `instanceShape`<sup>Required</sup> <a name="instanceShape" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.instanceShape"></a>

```typescript
public readonly instanceShape: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreComputeCapacityReportShapeAvailabilities;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportShapeAvailabilities">CoreComputeCapacityReportShapeAvailabilities</a>

---


### CoreComputeCapacityReportTimeoutsOutputReference <a name="CoreComputeCapacityReportTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreComputeCapacityReport } from 'rhizo-co-terraform-provider-oci'

new coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeouts">CoreComputeCapacityReportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreComputeCapacityReportTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReport.CoreComputeCapacityReportTimeouts">CoreComputeCapacityReportTimeouts</a>

---



