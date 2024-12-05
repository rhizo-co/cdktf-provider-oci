# `opsiNewsReport` Submodule <a name="`opsiNewsReport` Submodule" id="rhizo-co-terraform-provider-oci.opsiNewsReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiNewsReport <a name="OpsiNewsReport" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report oci_opsi_news_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer"></a>

```typescript
import { opsiNewsReport } from 'rhizo-co-terraform-provider-oci'

new opsiNewsReport.OpsiNewsReport(scope: Construct, id: string, config: OpsiNewsReportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig">OpsiNewsReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig">OpsiNewsReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes">putContentTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetAreChildCompartmentsIncluded">resetAreChildCompartmentsIncluded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContentTypes` <a name="putContentTypes" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes"></a>

```typescript
public putContentTypes(value: OpsiNewsReportContentTypes): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putTimeouts"></a>

```typescript
public putTimeouts(value: OpsiNewsReportTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a>

---

##### `resetAreChildCompartmentsIncluded` <a name="resetAreChildCompartmentsIncluded" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetAreChildCompartmentsIncluded"></a>

```typescript
public resetAreChildCompartmentsIncluded(): void
```

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetDayOfWeek"></a>

```typescript
public resetDayOfWeek(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiNewsReport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isConstruct"></a>

```typescript
import { opsiNewsReport } from 'rhizo-co-terraform-provider-oci'

opsiNewsReport.OpsiNewsReport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformElement"></a>

```typescript
import { opsiNewsReport } from 'rhizo-co-terraform-provider-oci'

opsiNewsReport.OpsiNewsReport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformResource"></a>

```typescript
import { opsiNewsReport } from 'rhizo-co-terraform-provider-oci'

opsiNewsReport.OpsiNewsReport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport"></a>

```typescript
import { opsiNewsReport } from 'rhizo-co-terraform-provider-oci'

opsiNewsReport.OpsiNewsReport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OpsiNewsReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpsiNewsReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpsiNewsReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpsiNewsReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.contentTypes">contentTypes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference">OpsiNewsReportContentTypesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference">OpsiNewsReportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.areChildCompartmentsIncludedInput">areChildCompartmentsIncludedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.contentTypesInput">contentTypesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.newsFrequencyInput">newsFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.onsTopicIdInput">onsTopicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.areChildCompartmentsIncluded">areChildCompartmentsIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.newsFrequency">newsFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.onsTopicId">onsTopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contentTypes`<sup>Required</sup> <a name="contentTypes" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.contentTypes"></a>

```typescript
public readonly contentTypes: OpsiNewsReportContentTypesOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference">OpsiNewsReportContentTypesOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeouts"></a>

```typescript
public readonly timeouts: OpsiNewsReportTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference">OpsiNewsReportTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `areChildCompartmentsIncludedInput`<sup>Optional</sup> <a name="areChildCompartmentsIncludedInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.areChildCompartmentsIncludedInput"></a>

```typescript
public readonly areChildCompartmentsIncludedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `contentTypesInput`<sup>Optional</sup> <a name="contentTypesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.contentTypesInput"></a>

```typescript
public readonly contentTypesInput: OpsiNewsReportContentTypes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a>

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `newsFrequencyInput`<sup>Optional</sup> <a name="newsFrequencyInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.newsFrequencyInput"></a>

```typescript
public readonly newsFrequencyInput: string;
```

- *Type:* string

---

##### `onsTopicIdInput`<sup>Optional</sup> <a name="onsTopicIdInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.onsTopicIdInput"></a>

```typescript
public readonly onsTopicIdInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OpsiNewsReportTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a>

---

##### `areChildCompartmentsIncluded`<sup>Required</sup> <a name="areChildCompartmentsIncluded" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.areChildCompartmentsIncluded"></a>

```typescript
public readonly areChildCompartmentsIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `newsFrequency`<sup>Required</sup> <a name="newsFrequency" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.newsFrequency"></a>

```typescript
public readonly newsFrequency: string;
```

- *Type:* string

---

##### `onsTopicId`<sup>Required</sup> <a name="onsTopicId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.onsTopicId"></a>

```typescript
public readonly onsTopicId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiNewsReportConfig <a name="OpsiNewsReportConfig" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.Initializer"></a>

```typescript
import { opsiNewsReport } from 'rhizo-co-terraform-provider-oci'

const opsiNewsReportConfig: opsiNewsReport.OpsiNewsReportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#compartment_id OpsiNewsReport#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.contentTypes">contentTypes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a></code> | content_types block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#description OpsiNewsReport#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.locale">locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#locale OpsiNewsReport#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#name OpsiNewsReport#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.newsFrequency">newsFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#news_frequency OpsiNewsReport#news_frequency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.onsTopicId">onsTopicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#ons_topic_id OpsiNewsReport#ons_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.areChildCompartmentsIncluded">areChildCompartmentsIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#are_child_compartments_included OpsiNewsReport#are_child_compartments_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#day_of_week OpsiNewsReport#day_of_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#defined_tags OpsiNewsReport#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#freeform_tags OpsiNewsReport#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#id OpsiNewsReport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#status OpsiNewsReport#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#compartment_id OpsiNewsReport#compartment_id}.

---

##### `contentTypes`<sup>Required</sup> <a name="contentTypes" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.contentTypes"></a>

```typescript
public readonly contentTypes: OpsiNewsReportContentTypes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a>

content_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#content_types OpsiNewsReport#content_types}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#description OpsiNewsReport#description}.

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#locale OpsiNewsReport#locale}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#name OpsiNewsReport#name}.

---

##### `newsFrequency`<sup>Required</sup> <a name="newsFrequency" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.newsFrequency"></a>

```typescript
public readonly newsFrequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#news_frequency OpsiNewsReport#news_frequency}.

---

##### `onsTopicId`<sup>Required</sup> <a name="onsTopicId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.onsTopicId"></a>

```typescript
public readonly onsTopicId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#ons_topic_id OpsiNewsReport#ons_topic_id}.

---

##### `areChildCompartmentsIncluded`<sup>Optional</sup> <a name="areChildCompartmentsIncluded" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.areChildCompartmentsIncluded"></a>

```typescript
public readonly areChildCompartmentsIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#are_child_compartments_included OpsiNewsReport#are_child_compartments_included}.

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#day_of_week OpsiNewsReport#day_of_week}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#defined_tags OpsiNewsReport#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#freeform_tags OpsiNewsReport#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#id OpsiNewsReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#status OpsiNewsReport#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OpsiNewsReportTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#timeouts OpsiNewsReport#timeouts}

---

### OpsiNewsReportContentTypes <a name="OpsiNewsReportContentTypes" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.Initializer"></a>

```typescript
import { opsiNewsReport } from 'rhizo-co-terraform-provider-oci'

const opsiNewsReportContentTypes: opsiNewsReport.OpsiNewsReportContentTypes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.capacityPlanningResources">capacityPlanningResources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#capacity_planning_resources OpsiNewsReport#capacity_planning_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsFleetAnalysisResources">sqlInsightsFleetAnalysisResources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_fleet_analysis_resources OpsiNewsReport#sql_insights_fleet_analysis_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsPerformanceDegradationResources">sqlInsightsPerformanceDegradationResources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_performance_degradation_resources OpsiNewsReport#sql_insights_performance_degradation_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsPlanChangesResources">sqlInsightsPlanChangesResources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_plan_changes_resources OpsiNewsReport#sql_insights_plan_changes_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopDatabasesResources">sqlInsightsTopDatabasesResources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_databases_resources OpsiNewsReport#sql_insights_top_databases_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopSqlByInsightsResources">sqlInsightsTopSqlByInsightsResources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_by_insights_resources OpsiNewsReport#sql_insights_top_sql_by_insights_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopSqlResources">sqlInsightsTopSqlResources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_resources OpsiNewsReport#sql_insights_top_sql_resources}. |

---

##### `capacityPlanningResources`<sup>Optional</sup> <a name="capacityPlanningResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.capacityPlanningResources"></a>

```typescript
public readonly capacityPlanningResources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#capacity_planning_resources OpsiNewsReport#capacity_planning_resources}.

---

##### `sqlInsightsFleetAnalysisResources`<sup>Optional</sup> <a name="sqlInsightsFleetAnalysisResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsFleetAnalysisResources"></a>

```typescript
public readonly sqlInsightsFleetAnalysisResources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_fleet_analysis_resources OpsiNewsReport#sql_insights_fleet_analysis_resources}.

---

##### `sqlInsightsPerformanceDegradationResources`<sup>Optional</sup> <a name="sqlInsightsPerformanceDegradationResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsPerformanceDegradationResources"></a>

```typescript
public readonly sqlInsightsPerformanceDegradationResources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_performance_degradation_resources OpsiNewsReport#sql_insights_performance_degradation_resources}.

---

##### `sqlInsightsPlanChangesResources`<sup>Optional</sup> <a name="sqlInsightsPlanChangesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsPlanChangesResources"></a>

```typescript
public readonly sqlInsightsPlanChangesResources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_plan_changes_resources OpsiNewsReport#sql_insights_plan_changes_resources}.

---

##### `sqlInsightsTopDatabasesResources`<sup>Optional</sup> <a name="sqlInsightsTopDatabasesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopDatabasesResources"></a>

```typescript
public readonly sqlInsightsTopDatabasesResources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_databases_resources OpsiNewsReport#sql_insights_top_databases_resources}.

---

##### `sqlInsightsTopSqlByInsightsResources`<sup>Optional</sup> <a name="sqlInsightsTopSqlByInsightsResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopSqlByInsightsResources"></a>

```typescript
public readonly sqlInsightsTopSqlByInsightsResources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_by_insights_resources OpsiNewsReport#sql_insights_top_sql_by_insights_resources}.

---

##### `sqlInsightsTopSqlResources`<sup>Optional</sup> <a name="sqlInsightsTopSqlResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopSqlResources"></a>

```typescript
public readonly sqlInsightsTopSqlResources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_resources OpsiNewsReport#sql_insights_top_sql_resources}.

---

### OpsiNewsReportTimeouts <a name="OpsiNewsReportTimeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.Initializer"></a>

```typescript
import { opsiNewsReport } from 'rhizo-co-terraform-provider-oci'

const opsiNewsReportTimeouts: opsiNewsReport.OpsiNewsReportTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#create OpsiNewsReport#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#delete OpsiNewsReport#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#update OpsiNewsReport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#create OpsiNewsReport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#delete OpsiNewsReport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#update OpsiNewsReport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiNewsReportContentTypesOutputReference <a name="OpsiNewsReportContentTypesOutputReference" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer"></a>

```typescript
import { opsiNewsReport } from 'rhizo-co-terraform-provider-oci'

new opsiNewsReport.OpsiNewsReportContentTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetCapacityPlanningResources">resetCapacityPlanningResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsFleetAnalysisResources">resetSqlInsightsFleetAnalysisResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsPerformanceDegradationResources">resetSqlInsightsPerformanceDegradationResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsPlanChangesResources">resetSqlInsightsPlanChangesResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopDatabasesResources">resetSqlInsightsTopDatabasesResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopSqlByInsightsResources">resetSqlInsightsTopSqlByInsightsResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopSqlResources">resetSqlInsightsTopSqlResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapacityPlanningResources` <a name="resetCapacityPlanningResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetCapacityPlanningResources"></a>

```typescript
public resetCapacityPlanningResources(): void
```

##### `resetSqlInsightsFleetAnalysisResources` <a name="resetSqlInsightsFleetAnalysisResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsFleetAnalysisResources"></a>

```typescript
public resetSqlInsightsFleetAnalysisResources(): void
```

##### `resetSqlInsightsPerformanceDegradationResources` <a name="resetSqlInsightsPerformanceDegradationResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsPerformanceDegradationResources"></a>

```typescript
public resetSqlInsightsPerformanceDegradationResources(): void
```

##### `resetSqlInsightsPlanChangesResources` <a name="resetSqlInsightsPlanChangesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsPlanChangesResources"></a>

```typescript
public resetSqlInsightsPlanChangesResources(): void
```

##### `resetSqlInsightsTopDatabasesResources` <a name="resetSqlInsightsTopDatabasesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopDatabasesResources"></a>

```typescript
public resetSqlInsightsTopDatabasesResources(): void
```

##### `resetSqlInsightsTopSqlByInsightsResources` <a name="resetSqlInsightsTopSqlByInsightsResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopSqlByInsightsResources"></a>

```typescript
public resetSqlInsightsTopSqlByInsightsResources(): void
```

##### `resetSqlInsightsTopSqlResources` <a name="resetSqlInsightsTopSqlResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopSqlResources"></a>

```typescript
public resetSqlInsightsTopSqlResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.capacityPlanningResourcesInput">capacityPlanningResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsFleetAnalysisResourcesInput">sqlInsightsFleetAnalysisResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPerformanceDegradationResourcesInput">sqlInsightsPerformanceDegradationResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPlanChangesResourcesInput">sqlInsightsPlanChangesResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopDatabasesResourcesInput">sqlInsightsTopDatabasesResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlByInsightsResourcesInput">sqlInsightsTopSqlByInsightsResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlResourcesInput">sqlInsightsTopSqlResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.capacityPlanningResources">capacityPlanningResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsFleetAnalysisResources">sqlInsightsFleetAnalysisResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPerformanceDegradationResources">sqlInsightsPerformanceDegradationResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPlanChangesResources">sqlInsightsPlanChangesResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopDatabasesResources">sqlInsightsTopDatabasesResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlByInsightsResources">sqlInsightsTopSqlByInsightsResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlResources">sqlInsightsTopSqlResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityPlanningResourcesInput`<sup>Optional</sup> <a name="capacityPlanningResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.capacityPlanningResourcesInput"></a>

```typescript
public readonly capacityPlanningResourcesInput: string[];
```

- *Type:* string[]

---

##### `sqlInsightsFleetAnalysisResourcesInput`<sup>Optional</sup> <a name="sqlInsightsFleetAnalysisResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsFleetAnalysisResourcesInput"></a>

```typescript
public readonly sqlInsightsFleetAnalysisResourcesInput: string[];
```

- *Type:* string[]

---

##### `sqlInsightsPerformanceDegradationResourcesInput`<sup>Optional</sup> <a name="sqlInsightsPerformanceDegradationResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPerformanceDegradationResourcesInput"></a>

```typescript
public readonly sqlInsightsPerformanceDegradationResourcesInput: string[];
```

- *Type:* string[]

---

##### `sqlInsightsPlanChangesResourcesInput`<sup>Optional</sup> <a name="sqlInsightsPlanChangesResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPlanChangesResourcesInput"></a>

```typescript
public readonly sqlInsightsPlanChangesResourcesInput: string[];
```

- *Type:* string[]

---

##### `sqlInsightsTopDatabasesResourcesInput`<sup>Optional</sup> <a name="sqlInsightsTopDatabasesResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopDatabasesResourcesInput"></a>

```typescript
public readonly sqlInsightsTopDatabasesResourcesInput: string[];
```

- *Type:* string[]

---

##### `sqlInsightsTopSqlByInsightsResourcesInput`<sup>Optional</sup> <a name="sqlInsightsTopSqlByInsightsResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlByInsightsResourcesInput"></a>

```typescript
public readonly sqlInsightsTopSqlByInsightsResourcesInput: string[];
```

- *Type:* string[]

---

##### `sqlInsightsTopSqlResourcesInput`<sup>Optional</sup> <a name="sqlInsightsTopSqlResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlResourcesInput"></a>

```typescript
public readonly sqlInsightsTopSqlResourcesInput: string[];
```

- *Type:* string[]

---

##### `capacityPlanningResources`<sup>Required</sup> <a name="capacityPlanningResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.capacityPlanningResources"></a>

```typescript
public readonly capacityPlanningResources: string[];
```

- *Type:* string[]

---

##### `sqlInsightsFleetAnalysisResources`<sup>Required</sup> <a name="sqlInsightsFleetAnalysisResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsFleetAnalysisResources"></a>

```typescript
public readonly sqlInsightsFleetAnalysisResources: string[];
```

- *Type:* string[]

---

##### `sqlInsightsPerformanceDegradationResources`<sup>Required</sup> <a name="sqlInsightsPerformanceDegradationResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPerformanceDegradationResources"></a>

```typescript
public readonly sqlInsightsPerformanceDegradationResources: string[];
```

- *Type:* string[]

---

##### `sqlInsightsPlanChangesResources`<sup>Required</sup> <a name="sqlInsightsPlanChangesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPlanChangesResources"></a>

```typescript
public readonly sqlInsightsPlanChangesResources: string[];
```

- *Type:* string[]

---

##### `sqlInsightsTopDatabasesResources`<sup>Required</sup> <a name="sqlInsightsTopDatabasesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopDatabasesResources"></a>

```typescript
public readonly sqlInsightsTopDatabasesResources: string[];
```

- *Type:* string[]

---

##### `sqlInsightsTopSqlByInsightsResources`<sup>Required</sup> <a name="sqlInsightsTopSqlByInsightsResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlByInsightsResources"></a>

```typescript
public readonly sqlInsightsTopSqlByInsightsResources: string[];
```

- *Type:* string[]

---

##### `sqlInsightsTopSqlResources`<sup>Required</sup> <a name="sqlInsightsTopSqlResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlResources"></a>

```typescript
public readonly sqlInsightsTopSqlResources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsiNewsReportContentTypes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a>

---


### OpsiNewsReportTimeoutsOutputReference <a name="OpsiNewsReportTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer"></a>

```typescript
import { opsiNewsReport } from 'rhizo-co-terraform-provider-oci'

new opsiNewsReport.OpsiNewsReportTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsiNewsReportTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a>

---



